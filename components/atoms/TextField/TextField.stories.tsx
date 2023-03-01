import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState, useRef } from "react";
import { withDesign } from "storybook-addon-designs";

import { TextField, TextFieldWithCopy } from "./TextField";

export default {
  title: "Design System/Atoms/TextField",
  component: TextField,
  decorators: [withDesign],
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField placeholder="Placehodlre" {...args}></TextField>
);

export const Default = Template.bind({});

Default.args = {};

const TemplateWithCopyDefaultValue: ComponentStory<typeof TextFieldWithCopy> = (
  args,
) => {
  const [value, setValue] = useState(args?.value || "");
  const ref: any = useRef<HTMLInputElement>();
  const handleOnChange = (e: any) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };
  return (
    <TextFieldWithCopy value={value} ref={ref} readOnly></TextFieldWithCopy>
  );
};

export const DefaultTextFieldWithCopyDefaultValue =
  TemplateWithCopyDefaultValue.bind({});

DefaultTextFieldWithCopyDefaultValue.args = { value: "TextFieldWithCopy" };

const TemplateWithCopy: ComponentStory<typeof TextFieldWithCopy> = (args) => (
  <TextFieldWithCopy {...args}></TextFieldWithCopy>
);

export const DefaultTextFieldWithCopy = TemplateWithCopy.bind({});

DefaultTextFieldWithCopy.args = {};
