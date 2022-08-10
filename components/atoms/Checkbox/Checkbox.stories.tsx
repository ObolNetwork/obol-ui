import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Checkbox } from "./Checkbox";

export default {
  title: "Design System/Atoms/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args}>{args.children}</Checkbox>
);

export const Default = Template.bind({});
