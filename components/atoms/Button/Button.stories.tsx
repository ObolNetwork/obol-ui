import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";2

import { Button, ButtonStory } from "./Button";

export default {
  title: "Design System/Atoms/Button",
  component: Button,
  decorators: [withDesign],
} as ComponentMeta<typeof ButtonStory>;

const Template: ComponentStory<typeof ButtonStory> = (args) => (
  <Button {...args}>{args.children}</Button>
);

export const Default = Template.bind({});

Default.args = {
  children: "Button",
};

export const NavButton = Template.bind({});

NavButton.args = {
  variant: "nav",
  children: "Join the community",
};

Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/XV5QpuUQnYK5kOWcYA4Kpv/Deep-Work-x-Obol-(Copy)?node-id=57%3A1272",
  },
};
