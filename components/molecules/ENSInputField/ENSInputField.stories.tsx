import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ENSInputField, ENSInputFieldProps } from "./ENSInputField";
import { TriangleUpIcon } from "@radix-ui/react-icons";

export default {
  title: "Design System/Molecules/ENSInputField",
  component: ENSInputField,
} as ComponentMeta<typeof ENSInputField>;

const Template: ComponentStory<typeof ENSInputField> = (
  args: ENSInputFieldProps,
) => <ENSInputField {...args} />;


export const Default = Template.bind({});
Default.args = {
  css: {
    px: "$sm",
    py: "$xs",
    borderRadius: "$1",
    border: "2px solid $bg04",
    backgroundColor: "$bg03",
    "& input div > div": {
      backgroundColor: "$bg03",
    },
    "&:focus-within": {
      backgroundColor: "$bg02",
    },
  },
  ensName: "obol.eth",
  value: "0x86B8145c98e5BD25BA722645b15eD65f024a87EC",
  handleOnChange: () => {
    console.log("Value changed");
  },
};

export const NonEditableField = Template.bind({});
NonEditableField.args = {
  css: {
    border: "2px solid $bg04",
    backgroundColor: "$bg03",
    borderRadius: "$1",
    px: "$sm",
    py: "$xs",
    nonEditable: true
  },
  ensName: "obol.eth",
  value: "0x86B8145c98e5BD25BA722645b15eD65f024a87EC",
  handleOnChange: () => {
    console.log("Value changed");
  },
  nonEditable:true
};

export const TableCell = Template.bind({});
TableCell.args = {
  css: {
    px: "$sm",
    py: "$xs",
    "&:focus-within": {
      backgroundColor: "$bg02",
    },
  },
  ensName: "obol.eth",
  value: "0x86B8145c98e5BD25BA722645b15eD65f024a87EC",
  handleOnChange: () => {
    console.log("Value changed");
  },
};