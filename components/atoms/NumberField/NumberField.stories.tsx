import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { withDesign } from "storybook-addon-designs";
import { NumberField } from "./NumberField";

export default {
  title: "Design System/Atoms/NumberField",
  component: NumberField,
  decorators: [withDesign],
} as ComponentMeta<typeof NumberField>;

const Template: ComponentStory<typeof NumberField> = (args) => (
  <NumberField {...args}></NumberField>
);

export const Default = Template.bind({});

Default.args = {};

const TemplateState: ComponentStory<typeof NumberField> = (args) => {
  const [value, setValue] = useState(1);
  return (
    <NumberField
      {...args}
      value={value}
      onChangeValue={(value) => {
        setValue(value);
      }}
    ></NumberField>
  );
};

export const DefaultState = TemplateState.bind({});

DefaultState.args = {};
