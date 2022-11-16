import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Switch } from "./Switch";

export default {
  title: "Design System/Atoms/Switch",
  component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => (
  <Switch />
);

export const Default = Template.bind({});
