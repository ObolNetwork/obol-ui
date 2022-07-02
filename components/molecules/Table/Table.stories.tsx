import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useEffect, useState } from "react";
import { uuid } from "uuidv4";
import { Table, SplitterTable, RowsTableType, RowItem } from "./Table";

export default {
  title: "Design System/Molecules/Table",
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => (
  <Table {...args}>{args.children}</Table>
);

export const Default = Template.bind({});

Default.args = {
  rows: [
    { id: uuid(), value: "0x34234234236" },
    { id: uuid(), value: "0x34234234235" },
    { id: uuid(), value: "0x34234234234" },
  ],
  columns: ["Operator Address"],
};

const TemplateSplitter: ComponentStory<typeof SplitterTable> = (args) => {
  const [data, setData] = useState<RowsTableType>(args.rows);

  const handleOnAddRow = (item: string) => {
    setData([...data, { id: uuid(), value: item }]);
  };

  const handleOnRemove = (id: string) => {
    debugger;
    setData(data.filter((o) => o.id !== id));
  };

  const handleOnUpdateRow = (id: string, value: string) => {
    setData(
      data.map((item) => (item.id === id ? { ...item, value } : { ...item }))
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

Splitter.args = {
  rows: [
    { id: uuid(), value: "0x34234234236" },
    { id: uuid(), value: "0x34234234235" },
    { id: uuid(), value: "0x34234234234" },
  ],
  columns: ["Operator Address"],
};
