import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ProgressTracker } from "./ProgressTracker";

export default {
  title: "Design System/Molecules/ProgressTracker",
  component: ProgressTracker,
} as ComponentMeta<typeof ProgressTracker>;

const Template: ComponentStory<typeof ProgressTracker> = (args) => (
  <ProgressTracker {...args}>{args.children}</ProgressTracker>
);

export const Default = Template.bind({});

Default.args = {
  items: [
    {
      href: "#",
      status: "complete",
      title: "Advisories",
    },
    {
      href: "#",
      status: "complete",
      title: "Advisories #2",
    },
    {
      href: "#",
      status: "incomplete",
      title: "Advisories #3",
    },
    {
      href: "#",
      status: "incomplete",
      title: "Advisories #4",
    },
    {
      href: "#",
      status: "incomplete",
      title: "Advisories #4",
    },
    {
      href: "#",
      status: "incomplete",
      title: "Advisories #4",
    },
  ],
};
