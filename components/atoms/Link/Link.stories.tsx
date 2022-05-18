import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { ArrowForward, OpenInNew } from "../../icons";

import { Link, LinkStory } from "./Link";

export default {
  title: "Design System/Atoms/Link",
  component: Link,
  decorators: [withDesign],
} as ComponentMeta<typeof LinkStory>;

const Template: ComponentStory<typeof LinkStory> = (args) => (
  <Link {...args}>{args.children}</Link>
);

export const Default = Template.bind({});

Default.args = {
  children: "Learn More",
};

export const WithArrow = Template.bind({});

WithArrow.args = {
  children: (
    <>
      Learn More
      <ArrowForward size="md" />
    </>
  ),
};

export const WithOpenInNew = Template.bind({});

WithOpenInNew.args = {
  children: (
    <>
      Learn More
      <OpenInNew size="md" />
    </>
  ),
};

export const Docs = Template.bind({});

Docs.args = {
  variant: "docs",
  children: "Docs",
};

Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/XV5QpuUQnYK5kOWcYA4Kpv/Deep-Work-x-Obol-(Copy)?node-id=57%3A1272",
  },
};
