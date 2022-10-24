import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NotificationCard } from "./NotificationCard";
import { Text } from "../../atoms";

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

export const WithElmentsAsHeading = Template.bind({});

WithElmentsAsHeading.args = {
  heading: (
    <>
      Do not submit any transaction with a{" "}
      <Text
        css={{
          border: " 1px solid $create",
          background: "rgba(60, 210, 221, 0.1)",
          display: "inline-block",
          borderRadius: "$1",
          padding: "0 $xxxs",
          color: "$create",
          fontSize: "$3",
          lineHeight: "16px",
        }}
      >
        deposit_data
      </Text>{" "}
      file that you did not create yourself, or that you do not own the mnemonic
      phrase for.
    </>
  ),
};
