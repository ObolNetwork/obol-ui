import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Link } from "../../atoms";
import { ArrowForward, CodeIcon } from "../../icons";

import { InfoCard, InfoCardProps } from "./InfoCard";

export default {
  title: "Design System/Molecules/InfoCard",
  component: InfoCard,
} as ComponentMeta<typeof InfoCard>;

const Template: ComponentStory<typeof InfoCard> = (args: InfoCardProps) => (
  <InfoCard {...args}></InfoCard>
);

export const Default = Template.bind({});

Default.args = {
  heading: "Heading",
  subheading:
    "The Obol Network will forever be open source and permissionless. The impact of distributed validators lies in their accessibility.",
  icon: <CodeIcon />,
  link: "https://obol.tech",
};

export const NoSubHeading = Template.bind({});

NoSubHeading.args = {
  heading: "Heading",
  icon: <CodeIcon />,
  link: "https://obol.tech",
};

export const NoSubHeadingAndChildren = Template.bind({});

NoSubHeadingAndChildren.args = {
  heading: "Heading",
  icon: <CodeIcon />,
};

export const NoChildren = Template.bind({});

NoChildren.args = {
  heading: "Heading",
  icon: <CodeIcon />,
  subheading:
    "The Obol Network will forever be open source and permissionless. The impact of distributed validators lies in their accessibility.",
};
