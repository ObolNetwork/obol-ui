import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { EcosystemCardProps } from "../../utils";
import { Box } from "../Box/Box";
import { TeamMemberCard } from "./TeamMemberCard";

export default {
  title: "Design System/Molecules/TeamMemberCard",
  component: TeamMemberCard,
  decorators: [withDesign],
} as ComponentMeta<typeof TeamMemberCard>;

const Template: ComponentStory<typeof TeamMemberCard> = (args) => (
  <TeamMemberCard {...args}>{args.children}</TeamMemberCard>
);

const listMembers: EcosystemCardProps[] = [
  {
    image: "https://obol.tech/assets/team/Edax.png",
    heading: "Collin Myers",
    subheading: "CEO Founder",
    links: [
      { link: "https://github.com/collin", network: "twitter" },
      { link: "https://github.com/collin", network: "github" },
    ],
  },
  {
    image: "https://obol.tech/assets/team/Edax.png",
    heading: "Collin Myers",
    subheading: "Marketing Strategy Advisor",
    links: [
      { link: "https://github.com/collin", network: "twitter" },
      { link: "https://github.com/collin", network: "github" },
    ],
  },
  {
    image: "https://obol.tech/assets/team/Edax.png",
    heading: "Collin Myers",
    subheading: "Technical Project Manager PM founder",
    links: [
      { link: "https://github.com/collin", network: "twitter" },
      { link: "https://github.com/collin", network: "github" },
    ],
  },
  {
    image: "https://obol.tech/assets/team/Edax.png",
    heading: "Collin Myers",
    subheading: "Ceo Founder",
    links: [
      { link: "https://github.com/collin", network: "twitter" },
      { link: "https://github.com/collin", network: "github" },
    ],
  },
];

const TemplateArray: ComponentStory<typeof TeamMemberCard> = (args) => {
  return (
    <Box css={{ display: "flex", gap: "$md" }}>
      {listMembers.map((member, index) => (
        <TeamMemberCard key={`o:card-${index}:`} {...member} />
      ))}
    </Box>
  );
};

export const Default = Template.bind({});
export const WithArray = TemplateArray.bind({});
Default.args = {
  image: "https://obol.tech/assets/team/Edax.png",
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
