import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Link } from "../../atoms";
import { IconArrowForward } from "../../icons";

import { InfoCard, InfoCardProps } from "./InfoCard";

export default {
  title: "Design System/Molecules/InfoCard",
  component: InfoCard,
} as ComponentMeta<typeof InfoCard>;

const Template: ComponentStory<typeof InfoCard> = (args: InfoCardProps) => (
  <InfoCard {...args}>{args.children}</InfoCard>
);

export const Default = Template.bind({});

Default.args = {
  heading: "Heading",
  subheading:
    "The Obol Network will forever be open source and permissionless. The impact of distributed validators lies in their accessibility.",
  image: { src: "/vercel.svg", width: "48px", height: "48px" },
  children: (
    <Link>
      Learn More <IconArrowForward />
    </Link>
  ),
};
