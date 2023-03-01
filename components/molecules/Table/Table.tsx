import { CSS, styled } from "../../../stitches.config";
import { Button, IconButton, TextField, Box } from "../../atoms";
import { TrashIcon } from "../../icons";

const StyledTable = styled("table", {
  borderCollapse: "collapse",
  borderRadius: "2px",
  backgroundColor: "$bg02",
  borderStyle: "hidden",
  boxShadow: "0 0 0 2px $colors$bg04",
  width: "100%",

  "& thead": {
    color: "$body",
    textTransform: "uppercase",
    fontWeight: "$bold",
    fontSize: "$3",

    "& td": {
      py: "$xs",
      px: "$sm",
    },
  },
  "& tr": {
    color: "$textLighter",
  },
});

const Td = styled("td", {
  border: "2px solid $bg04",
  py: "$sm",
  px: "$sm",
  color: "$body",
  fontWeight: "$bold",
  fontSize: "$4",
  "& input": {
    border: "none",
    borderRadius: 0,
    width: "100%",
  },
  textOverflow: "ellipsis",
  maxWidth: 0,
  whiteSpace: "nowrap",
  overflow: "hidden",

  variants: {
    splitter: {
      true: {
        py: 0,
        px: 0,
        backgroundColor: "$bg03",
      },
    },
    size: {
      sm: {
        width: "$3xl",
      },
    },
    textCenter: {
      true: {
        textAlign: "center",
      },
    },
  },
});

const Th = styled("th", {
  border: "2px solid $bg04",
  minWidth: "20px",
  py: "$sm",
  px: "$sm",
  textAlign: "center",
  color: "$body",
  fontWeight: "$bold",
  fontSize: "$4",
  "& input": {
    border: "none",
    borderRadius: 0,
    width: "100%",
  },
});

const Tr = styled("tr", {});

const BoxBorderTop = styled(Box, {
  borderTop: "2px solid $bg04",
  marginTop: "$2",
  height: "$3xl",
  display: "flex",
  alignItems: "center",
  px: "$sm",
});

type AddNewRowProps = {
  onAddRow: ((item?: unknown) => void) | undefined;
  totalSplitFooter: number;
  addText?: string;
};

const AddNewRow: React.FC<AddNewRowProps> = ({
  onAddRow,
  totalSplitFooter,
  addText = "+ Add Recipient",
}) => {
  return (
    <Tr>
      <Td splitter>
        <BoxBorderTop />
      </Td>
      <Td splitter css={{ backgroundColor: "$bg03" }}>
        <BoxBorderTop
          css={{
            "@xs": {
              px: "$2",
            },
          }}
        >
          {onAddRow && (
            <Button
              type="button"
              css={{
                color: "$obolGreen",
                justifyContent: "start",
                borderRadius: 0,
                "&:hover": {
                  backgroundColor: "#2FE4AB10",
                },

                "&:disabled": {
                  borderColor: "transparent",
                },

                "@xs": {
                  px: "$1",
                },
              }}
              fullWidth
              ghost
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                onAddRow();
              }}
              disabled={totalSplitFooter === 100}
            >
              <Box
                css={{ display: "none", "@xs": { display: "inline-block" } }}
              >
                + Recipient
              </Box>{" "}
              <Box css={{ "@xs": { display: "none" } }}>{addText}</Box>
            </Button>
          )}
        </BoxBorderTop>
      </Td>
      <Td splitter css={{ backgroundColor: "$bg03" }}>
        <BoxBorderTop>
          <Box>{totalSplitFooter && `${totalSplitFooter}%`}</Box>
        </BoxBorderTop>
      </Td>
    </Tr>
  );
};

// Types
export type RowDef<T> = {
  id: string;
  isRemovable?: boolean;
  isEditable?: boolean;
} & T;

export type CellDef = {
  component: "TextField";
  config?: {
    type: "text" | "number";
    max?: number;
    min?: number;
    totalCell?: boolean;
  };
};

export type ColumnDef<T> = {
  accessorKey: keyof T;
  header: string | React.ReactNode;
  css?: CSS;
  cell?: CellDef;
};

export interface TableProps {
  rows: RowDef<any>[];
  columns: ColumnDef<any>[];
}

export interface SplitterTableProps extends TableProps {
  onAddRow?(item?: unknown): void;
  onRemoveRow?(item: string | number): void;
  onUpdateRow?(id: string, value: string | number, accessorKey: unknown): void;
  totalSplitFooter?: number;
  addText?: string;
}

export const SplitterTable: React.FC<SplitterTableProps> = ({
  rows,
  columns,
  onAddRow,
  onRemoveRow,
  onUpdateRow,
  totalSplitFooter = 100,
  addText,
}): JSX.Element => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <Th></Th>
          {columns.map(({ css, ...column }, index) => (
            <Th css={{ textAlign: "start", ...css }} key={`header-${index}`}>
              {column.header}
            </Th>
          ))}
          <Th></Th>
        </tr>
      </thead>
      <tbody>
        {rows.map(
          ({ isRemovable = true, isEditable = true, ...row }, rowIndex) => (
            <tr key={row.id}>
              <Td textCenter size="sm">
                {rowIndex + 1}
              </Td>
              {columns.map((column, cellIndex) => {
                const isTextField = column.cell?.component === "TextField";
                return (
                  <Td
                    splitter
                    key={`cell ${cellIndex}`}
                    css={{
                      "input::-webkit-inner-spin-button": {
                        "-webkit-appearance": "none",
                        margin: 0,
                      },
                      /* Firefox */
                      "input[type=number]": {
                        "-moz-appearance": "textfield",
                      },
                    }}
                  >
                    {isTextField && (
                      <TextField
                        css={{ color: "$body", fontWeight: "$bold" }}
                        defaultValue={row[column.accessorKey]}
                        step="any"
                        onInput={(e: any) => {
                          const inputValue =
                            e.target.value === ""
                              ? 0
                              : parseFloat(e.target.value).toFixed(2);

                          if (column.cell?.config?.type === "number") {
                            if (column.cell?.config?.totalCell) {
                              const value = rows.reduce((prev, curr, indx) => {
                                const floatNumber = parseFloat(
                                  curr[column.accessorKey],
                                );
                                const parsedValue = isNaN(floatNumber)
                                  ? 0
                                  : floatNumber;
                                return curr[column.accessorKey] &&
                                  indx !== rowIndex
                                  ? parsedValue + prev
                                  : prev;
                              }, 0);
                              const maxValue = 100 - value;

                              if (inputValue > maxValue)
                                e.target.value = maxValue.toFixed(2);
                            }
                          }
                        }}
                        onChange={(e) => {
                          const inputValue =
                            e.target.value === ""
                              ? 0
                              : +parseFloat(e.target.value).toFixed(2);

                          const value =
                            column.cell?.config?.type === "number"
                              ? inputValue
                              : e.target.value;
                          if (onUpdateRow)
                            onUpdateRow(row.id, value, column.accessorKey);
                        }}
                        min={column.cell?.config?.min}
                        max={column.cell?.config?.max}
                        type={column.cell?.config?.type}
                        readOnly={!isEditable}
                      />
                    )}
                  </Td>
                );
              })}
              {onRemoveRow && isRemovable && (
                <Td splitter size="sm" css={{ p: "$2" }}>
                  <IconButton ghost onClick={() => onRemoveRow(row.id)}>
                    <TrashIcon />
                  </IconButton>
                </Td>
              )}
            </tr>
          ),
        )}
        <AddNewRow
          onAddRow={onAddRow}
          totalSplitFooter={totalSplitFooter}
          addText={addText}
        />
      </tbody>
    </StyledTable>
  );
};

export const Table: React.FC<TableProps> = ({ rows, columns }): JSX.Element => {
  return (
    <StyledTable>
      <thead>
        <tr>
          {columns.map(({ css, ...column }, index) => (
            <Th css={{ textAlign: "start", ...css }} key={`header-${index}`}>
              {column.header}
            </Th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={`row ${rowIndex}`}>
            {columns.map((column, cellIndex) => {
              return (
                <Td key={`cell ${cellIndex}`} css={{ color: "$light" }}>
                  {row[column.accessorKey]}
                </Td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};
