import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { Download } from "../../icons";

import { Button, ButtonStory } from "./Button";

import { LoadingButton } from "../LoadingButton/LoadingButton";

export default {
  title: "Design System/Atoms/Button",
  component: Button,
  decorators: [withDesign],
} as ComponentMeta<typeof ButtonStory>;

const Template: ComponentStory<typeof ButtonStory> = (args) => (
  <Button {...args}>{args.children}</Button>
);

const TemplateLoading: ComponentStory<typeof ButtonStory> = (args) => (
  <LoadingButton {...args}>{args.children}</LoadingButton>
);

export const DefaultObol = Template.bind({});

DefaultObol.args = {
  children: "Button",
};

export const DefaultLight = Template.bind({});

DefaultLight.args = {
  children: "Button",
  color: "primary",
};

export const WithIcon = Template.bind({});

WithIcon.args = {
  children: (
    <>
      <Download size="lg" />
      Button
    </>
  ),
  color: "primary",
  disabled: true,
};

export const WithLoading = TemplateLoading.bind({});

WithLoading.args = {
  loading: true,
  variant: "tx",
  children: "Waiting for transaction to be mined...",
};

export const WithLoading2 = TemplateLoading.bind({});

WithLoading2.args = {
  loading: true,
  color: "primary",
  children: "Button",
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
