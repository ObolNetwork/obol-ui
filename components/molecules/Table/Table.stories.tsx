import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useEffect, useState } from "react";
import { uuid } from "uuidv4";
import { Table, SplitterTable, ColumnDef, RowDef } from "./Table";

type SplitterType = {
  id: string;
  operator: string | null;
  split: number | null;
};

const defaultData: RowDef<SplitterType>[] = [
  {
    id: uuid(),
    operator: "0x34234234236",
    split: 1,
    removable: false
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
      config: { type: "number", min: 1, max: 100, totalCell: true },
    },
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
  columns: defaultColumns,
};

const TemplateSplitter: ComponentStory<typeof SplitterTable> = (args) => {
  const [data, setData] = useState(args.rows);
  const [maxSplit, setMaxSplit] = useState(100);

  const handleOnAddRow = (
    item: SplitterType = { id: uuid(), operator: null, split: null }
  ) => {
    setData([...data, item]);
  };

  const handleOnRemove = (id: string) => {
    setData(data.filter((o) => o.id !== id));
  };

  const handleOnUpdateRow = (id: string, value: string, accessorKey: any) => {
    setData(
      data.map((item) =>
        item.id === id ? { ...item, [accessorKey]: value } : { ...item }
      )
    );
  };

  useEffect(() => {
    if (data) {
      const totalValue = data.reduce(
        (prev, curr) =>
          curr["split"] ? parseFloat(curr["split"]) + prev : prev,
        0
      );

      setMaxSplit(totalValue);

    }
  }, [data]);

  console.log(maxSplit);
  return (
    <SplitterTable
      {...args}
      rows={data}
      onAddRow={handleOnAddRow}
      onRemoveRow={handleOnRemove}
      onUpdateRow={handleOnUpdateRow}
      totalSplitFooter={maxSplit}
    >
      {args.children}
    </SplitterTable>
  );
};
export const Splitter = TemplateSplitter.bind({});

Splitter.args = {
  rows: defaultData,
  columns: defaultColumns,
};
