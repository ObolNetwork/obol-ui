import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NotificationCard } from "./NotificationCard";

export default {
  title: "Design System/Molecules/NotificationCard",
  component: NotificationCard,
} as ComponentMeta<typeof NotificationCard>;

const Template: ComponentStory<typeof NotificationCard> = (args) => (
  <NotificationCard {...args}>{args.children}</NotificationCard>
);

export const Default = Template.bind({});

Default.args = {
  heading: "You will need to set the terms of the proposed cluster to create",
};

export const WithSubheading = Template.bind({});

WithSubheading.args = {
  heading: "You will need to set the terms of the proposed cluster to create",
  subHeading: `An ENR is an "Ethereum Node Record", and is used to identify your client to the other clients in the cluster.`,
};

export const WithSubheadingAndLink = Template.bind({});

WithSubheadingAndLink.args = {
  heading: "You will need to set the terms of the proposed cluster to create",
  subHeading: `An ENR is an "Ethereum Node Record", and is used to identify your client to the other clients in the cluster.`,
  link: "https://docs.obol.tech",
};
