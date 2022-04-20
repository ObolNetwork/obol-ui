import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import { Button, ButtonStory } from "./Button";

export default {
  title: "Design System/Atoms/Button",
  component: Button,
  decorators: [withDesign],
} as ComponentMeta<typeof ButtonStory>;

type CompButtonStory = typeof ButtonStory;
const Template: ComponentStory<CompButtonStory> = (args) => (
  <Button {...args}>{args.children}</Button>
);

export const DefaultObol = Template.bind({});

DefaultObol.args = {
  children: "Button",
  disabled: false,
};

export const DefaultLight = Template.bind({});

DefaultLight.args = {
  children: "Button",
  color: "primary"
};

export const NavButton = Template.bind({});

NavButton.args = {
  variant: "nav",
  children: "Join the community",
};

DefaultObol.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/XV5QpuUQnYK5kOWcYA4Kpv/Deep-Work-x-Obol-(Copy)?node-id=57%3A1272",
  },
};
