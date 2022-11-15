import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Toggleswitch } from "./Toggleswitch";

export default {
  title: "Design System/Atoms/Toggleswitch",
  component: Toggleswitch,
} as ComponentMeta<typeof Toggleswitch>;

const Template: ComponentStory<typeof Toggleswitch> = (args) => (
  <Toggleswitch />
);

export const Default = Template.bind({});
