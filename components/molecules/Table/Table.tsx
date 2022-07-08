import { styled } from "../../../stitches.config";
import { Button, IconButton, TextField, Box } from "../../atoms";
import { TrashIcon } from "../../icons";

const StyledTable = styled("table", {
  borderCollapse: "collapse",
  borderRadius: "2px",
  backgroundColor: "$bg02",
  borderStyle: "hidden",
  boxShadow: "0 0 0 2px $bg04",
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
      },
    },
    size: {
      sm: {
        width: "$3xl",
      },
    },
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
export interface TableProps {
  rows: RowsTableType;
  columns: string[];
}

export interface SplitterTableProps extends TableProps {
  renderComponentValue?: "TextField" | "Text";
  onAddRow(item: string): void;
  onRemoveRow(item: string | number): void;
  onUpdateRow(id: string, value: string): void;
}

// Components

export const SplitterTable: React.FC<SplitterTableProps> = ({
  rows,
  columns,
  renderComponentValue = "TextField",
  onAddRow,
  onRemoveRow,
  onUpdateRow,
}): JSX.Element => {
  return (
    <StyledTable>
      <thead>
        <Td></Td>
        {columns.map((column, index) => (
          <Td css={{ textAlign: "start" }} key={`header-${index}`}>
            {column}
          </Td>
        ))}
        <Td></Td>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={row.id}>
            <Td size="sm">{rowIndex + 1}</Td>
            {Object.keys(row).map((data, cellIndex) => {
              if (data === "id") return null;
              const isTextField = renderComponentValue === "TextField";
              return (
                <Td noPadding key={`cell ${cellIndex}`}>
                  {isTextField ? (
                    <TextField
                      defaultValue={row.value}
                      onChange={(e) => onUpdateRow(row.id, e.target.value)}
                    />
                  ) : (
                    row.value
                  )}
                </Td>
              );
            })}
            <Td size="sm">
              <IconButton ghost onClick={() => onRemoveRow(row.id)}>
                <TrashIcon />
              </IconButton>
            </Td>
          </tr>
        ))}
        <AddNewRow handleOnClick={() => onAddRow("")} />
      </tbody>
    </StyledTable>
  );
};

export const Table: React.FC<TableProps> = ({
  rows,
  columns,
}): JSX.Element => {
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
            {Object.keys(row).map((data, cellIndex) => {
              return (
                <Td key={`cell ${cellIndex}`}>
                  {row.value}
                </Td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};
