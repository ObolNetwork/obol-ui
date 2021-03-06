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
});

const AddNewRow: React.FC<any> = (props) => {
  return (
    <Tr>
      <Td noPadding>
        <BoxBorderTop>{""}</BoxBorderTop>
      </Td>
      <Td noPadding css={{ backgroundColor: "$bg03" }}>
        <BoxBorderTop>
          <Button
            type="button"
            css={{
              color: "$obolGreen",
              justifyContent: "start",
              borderRadius: 0,
              "&:hover": {
                backgroundColor: "#2FE4AB10",
              },
            }}
            fullWidth
            ghost
            onClick={props.handleOnClick}
          >
            + Add Signer
          </Button>
        </BoxBorderTop>
      </Td>
      <Td noPadding css={{ backgroundColor: "$bg03" }}>
        <BoxBorderTop />
      </Td>
    </Tr>
  );
};

// Types
export interface RowItem {
  id: string;
  value: string;
}

export type RowTableType = Record<string, string | React.ReactNode>;
export type RowsTableType = RowItem[];

export type CellDef = {
  component: "TextField" | "NumberField";
  config?: {
    type: "text" | "number";
    max?: number;
    min?: number;
  };
};

export type ColumnDef<T> = {
  accessorKey: keyof T;
  header: string;
  cell?: CellDef;
};

export interface TableProps {
  rows: any[];
  columns: ColumnDef<any>[];
}

export interface SplitterTableProps extends TableProps {
  onAddRow(item?: unknown): void;
  onRemoveRow(item: string | number): void;
  onUpdateRow(id: string, value: string | number, accessorKey: unknown): void;
  removeButton?: boolean;
}

// Components

export const SplitterTable: React.FC<SplitterTableProps> = ({
  rows,
  columns,
  onAddRow,
  onRemoveRow,
  onUpdateRow,
  removeButton = true,
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
        {rows.map((row, rowIndex) => (
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
                          if (column.cell?.config?.max) {
                            if (
                              Number(e.target.value) > column.cell?.config?.max
                            )
                              e.target.value = column.cell?.config?.max;
                          }
                        }
                      }}
                      onChange={(e) => {
                        const value =
                          column.cell?.config?.type === "number"
                            ? Number(e.target.value)
                            : e.target.value;
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
            {removeButton && (
              <Td size="sm">
                <IconButton ghost onClick={() => onRemoveRow(row.id)}>
                  <TrashIcon />
                </IconButton>
              </Td>
            )}
          </tr>
        ))}
        <AddNewRow
          handleOnClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            onAddRow();
          }}
        />
      </tbody>
    </StyledTable>
  );
};

export const Table: React.FC<TableProps> = ({ rows, columns }): JSX.Element => {
  return (
    <StyledTable>
      <thead>
        {columns.map((column, index) => (
          <Td key={`header-${index}`}>{column}</Td>
        ))}
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
