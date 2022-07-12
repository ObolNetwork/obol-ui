import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useEffect, useState } from "react";
import { uuid } from "uuidv4";
import { Table, SplitterTable, RowsTableType, ColumnDef } from "./Table";

const defaultData: SplitterType[] = [
  {
    id: uuid(),
    operator: "0x34234234236",
    split: 1,
  },
  {
    id: uuid(),
    operator: "0x34234234236",
    split: 1,
  },
  {
    id: uuid(),
    operator: "0x34234234236",
    split: 1,
  },
];

export default {
  title: "Design System/Molecules/Table",
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => (
  <Table {...args}>{args.children}</Table>
);

export const Default = Template.bind({});

Default.args = {
  rows: defaultData,
  columns: [{ header: "Operator Address", accessorKey: "operator" }],
};

const TemplateSplitter: ComponentStory<typeof SplitterTable> = (args) => {
  const [data, setData] = useState(args.rows);

  const handleOnAddRow = (item: string) => {
    setData([...data, { id: uuid(), value: item }]);
  };

  const handleOnRemove = (id: string) => {
    setData(data.filter((o) => o.id !== id));
  };

  const handleOnUpdateRow = (id: string, value: string, accessorKey: any) => {
    setData(
      data.map((item) => (item.id === id ? { ...item, [accessorKey]: value } : { ...item }))
    );
  };

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <SplitterTable
      {...args}
      rows={data}
      onAddRow={handleOnAddRow}
      onRemoveRow={handleOnRemove}
      onUpdateRow={handleOnUpdateRow}
    >
      {args.children}
    </SplitterTable>
  );
};
export const Splitter = TemplateSplitter.bind({});

type SplitterType = {
  id: string;
  operator: string;
  split: number;
};

const defaultColumns: ColumnDef<SplitterType>[] = [
  {
    accessorKey: "operator",
    header: "Operator Address",
    cell: { component: "TextField" },
  },
  {
    accessorKey: "split",
    header: "Split %",
    cell: {
      component: "TextField",
      config: { type: "number", min: 1, max: 100 },
    },
  },
];

Splitter.args = {
  rows: defaultData,
  columns: defaultColumns,
};
