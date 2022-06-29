import { ComponentStory, ComponentMeta } from "@storybook/react";
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
