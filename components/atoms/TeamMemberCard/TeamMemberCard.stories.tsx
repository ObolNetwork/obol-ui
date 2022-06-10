import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { TeamMemberCard } from "./TeamMemberCard";

export default {
  title: "Design System/Molecules/TeamMemberCard",
  component: TeamMemberCard,
  decorators: [withDesign],
} as ComponentMeta<typeof TeamMemberCard>;

const Template: ComponentStory<typeof TeamMemberCard> = (args) => (
  <TeamMemberCard {...args}>{args.children}</TeamMemberCard>
);

export const Default = Template.bind({});

Default.args = {
  image: "/assets/team/Collin.png",
  heading: "Collin Myers",
  subheading: "CEO Founder",
  links: [
    { link: "https://github.com/collin", network: "twitter" },
    { link: "https://github.com/collin", network: "github" },
  ],
};

Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/XV5QpuUQnYK5kOWcYA4Kpv/Deep-Work-x-Obol-(Copy)?node-id=57%3A1272",
  },
};
