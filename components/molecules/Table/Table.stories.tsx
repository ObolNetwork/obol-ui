import { ComponentStory, ComponentMeta } from "@storybook/react";
import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { TooltipComponent, Box, Text } from "../../atoms";
import { AlertIcon, CheckIcon, WaitingIcon } from "../../icons";
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
    split: 1.9,
    isRemovable: false,
    isEditable: false,
  },
  {
    id: uuid(),
    operator: "0x34234234236",
    split: 1.6,
  },
  {
    id: uuid(),
    operator: "0x34234234236",
    split: 1.5,
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

type SimpleType = { operator: string; split?: number | React.ReactNode };

const defaultRowsSimple: RowDef<SimpleType>[] = [
  {
    id: uuid(),
    operator: "0x342342342360x342342342360x342342342360x34234234236",
    split: (
      <Box css={{ display: "flex", gap: "$xxs", alignItems: "center" }}>
        <WaitingIcon /> <Text color="muted">Waiting</Text>
      </Box>
    ),
  },
  {
    id: uuid(),
    operator: "0x342342342360x342342342360x342342342360x34234234236",
    split: (
      <Box css={{ display: "flex", gap: "$xxs", alignItems: "center" }}>
        <CheckIcon /> Accepted
      </Box>
    ),
  },
];

const defaultColumnsSimple: ColumnDef<SimpleType>[] = [
  {
    accessorKey: "operator",
    header: "Operator Address",
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
  rows: defaultRowsSimple,
  columns: defaultColumnsSimple,
};

const defaultColumnsSimpleWithHeaderComponents: ColumnDef<SimpleType>[] = [
  {
    accessorKey: "operator",
    header: "Operator Address",
  },
  {
    accessorKey: "split",
    header: (
      <Box css={{ display: "flex", gap: "$xxs" }}>
        Split
        <TooltipComponent
          side="top"
          content={`An ENR is an "Ethereum Node Record", and is used to identify your client to the other clients in the cluster.`}
        >
          <Box css={{ display: "flex" }}>
            <AlertIcon size="sm" color="body" />
          </Box>
        </TooltipComponent>
      </Box>
    ),
  },
];

export const WithComponentInHeader = Template.bind({});

WithComponentInHeader.args = {
  rows: defaultRowsSimple,
  columns: defaultColumnsSimpleWithHeaderComponents,
};

const TemplateSplitter: ComponentStory<typeof SplitterTable> = (args) => {
  const [data, setData] = useState(args.rows);
  const [maxSplit, setMaxSplit] = useState(100);

  const handleOnAddRow = (
    item: SplitterType = { id: uuid(), operator: null, split: null },
  ) => {
    setData([...data, item]);
  };

  const handleOnRemove = (id: string) => {
    setData(data.filter((o) => o.id !== id));
  };

  const handleOnUpdateRow = (id: string, value: string, accessorKey: any) => {
    setData(
      data.map((item) =>
        item.id === id ? { ...item, [accessorKey]: value } : { ...item },
      ),
    );
  };

  useEffect(() => {
    if (data) {
      const totalValue = data.reduce(
        (prev, curr) =>
          curr["split"] ? parseFloat(curr["split"]) + prev : prev,
        0,
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
