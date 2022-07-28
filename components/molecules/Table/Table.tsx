import { useState } from "react";
import { styled } from "../../../stitches.config";
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
  py: 0,
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

  variants: {
    noPadding: {
      true: {
        p: 0,
        backgroundColor: "$bg03",
      },
    },
    size: {
      sm: {
        width: "$3xl",
      },
    },
  },
});

const Th = styled("th", {
  border: "2px solid $bg04",
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

const AddNewRow: React.FC<any> = ({ onAddRow, totalSplitFooter }) => {
  return (
    <Tr>
      <Td noPadding>
        <BoxBorderTop />
      </Td>
      <Td noPadding css={{ backgroundColor: "$bg03" }}>
        <BoxBorderTop>
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
              }}
              fullWidth
              ghost
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                onAddRow();
              }}
              disabled={totalSplitFooter === 100}
            >
              + Add Signer
            </Button>
          )}
        </BoxBorderTop>
      </Td>
      <Td noPadding css={{ backgroundColor: "$bg03" }}>
        <BoxBorderTop>
          {totalSplitFooter && `${totalSplitFooter}%`}
        </BoxBorderTop>
      </Td>
    </Tr>
  );
};

// Types

export type RowDef<T> = { id: string; removable?: boolean } & T;

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
  header: string;
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
}

// Components

export const SplitterTable: React.FC<SplitterTableProps> = ({
  rows,
  columns,
  onAddRow,
  onRemoveRow,
  onUpdateRow,
  totalSplitFooter = 100,
}): JSX.Element => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <Th></Th>
          {columns.map((column, index) => (
            <Th css={{ textAlign: "start" }} key={`header-${index}`}>
              {column.header}
            </Th>
          ))}
          <Th></Th>
        </tr>
      </thead>
      <tbody>
        {rows.map(({ removable = true, ...row }, rowIndex) => (
          <tr key={row.id}>
            <Td size="sm">{rowIndex + 1}</Td>
            {columns.map((column, cellIndex) => {
              const isTextField = !!column.cell;
              return (
                <Td
                  noPadding
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
                  {isTextField ? (
                    <TextField
                      defaultValue={row[column.accessorKey]}
                      onInput={(e: any) => {
                        if (column.cell?.config?.type === "number") {
                          if (column.cell?.config?.totalCell) {
                            const value = rows.reduce(
                              (prev, curr, indx) =>
                                curr[column.accessorKey] && indx !== rowIndex
                                  ? parseFloat(curr[column.accessorKey]) + prev
                                  : prev,
                              0
                            );
                            const maxValue = 100 - value;
                            if (parseFloat(e.target.value) > maxValue)
                              e.target.value = maxValue;
                          }
                        }
                      }}
                      onChange={(e) => {
                        const value =
                          column.cell?.config?.type === "number"
                            ? parseFloat(e.target.value)
                            : e.target.value;
                        if (onUpdateRow)
                          onUpdateRow(row.id, value, column.accessorKey);
                      }}
                      {...column.cell?.config}
                    />
                  ) : (
                    row[column.accessorKey]
                  )}
                </Td>
              );
            })}
            {onRemoveRow && removable && (
              <Td size="sm">
                <IconButton ghost onClick={() => onRemoveRow(row.id)}>
                  <TrashIcon />
                </IconButton>
              </Td>
            )}
          </tr>
        ))}

        <AddNewRow onAddRow={onAddRow} totalSplitFooter={totalSplitFooter} />
      </tbody>
    </StyledTable>
  );
};

export const Table: React.FC<TableProps> = ({ rows, columns }): JSX.Element => {
  return (
    <StyledTable>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <Th key={`header-${index}`}>{column}</Th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={`row ${rowIndex}`}>
            {columns.map((column, cellIndex) => {
              return (
                <Td key={`cell ${cellIndex}`}>{row[column.accessorKey]}</Td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};
