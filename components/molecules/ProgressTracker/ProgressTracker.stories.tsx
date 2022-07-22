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
      id: 1,
      rank: 1,
      status: "complete",
      title: "Advisories",
      href: "/advisories",
    },
    {
      id: 2,
      rank: 2,
      status: "complete",
      title: "Configure Cluster",
      href: "/config-cluster",
    },
    {
      id: 3,
      rank: 3,
      status: "current",
      title: "Confirm Configuration",
      href: "/confirm-configuration",
    },
    {
      id: 4,
      rank: 4,
      status: "incomplete",
      title: "Invite Group",
      href: "/invite-group",
    },
    {
      id: 5,
      rank: 5,
      status: "incomplete",
      title: "Distributed Key Generation",
      href: "/distributed-key-generation",
    },
    {
      id: 6,
      rank: 6,
      status: "incomplete",
      title: "Set up Cluster",
      href: "/set-up-cluster",
    },
    {
      id: 7,
      rank: 7,
      status: "incomplete",
      title: "Deposit",
      href: "/deposit",
    },
  ],
};
