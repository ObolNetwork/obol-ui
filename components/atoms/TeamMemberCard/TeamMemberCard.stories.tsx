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
    heading: "Collin Myers",
    subheading: "Project Lead, Founder",
    links: [
      { link: "https://twitter.com/stakeeth", network: "twitter" },
      { link: "https://github.com/collinjmyers", network: "github" },
    ],

    image: "https://obol.tech/assets/team/Collin.png",
  },
  {
    heading: "Oisín Kyne",
    subheading: "Head of Technology, Co-Founder",
    links: [
      { link: "https://twitter.com/oisinkyne", network: "twitter" },
      { link: "https://github.com/oisinkyne", network: "github" },
    ],
    image: "https://obol.tech/assets/team/Oisin.jpg",
  },
  {
    heading: "Aly Saleh",
    image: "https://obol.tech/assets/team/Saleh.jpg",
    subheading: "DevOps Lead",
    links: [
      { link: "https://twitter.com/eth2devops", network: "twitter" },
      { link: "https://github.com/eth2devops", network: "github" },
    ],
  },
  {
    heading: "Corver Roos",
    image: "https://obol.tech/assets/team/Corver.png",
    subheading: "Tech Lead",
    links: [
      { link: "https://twitter.com/corverdev", network: "twitter" },
      { link: "https://github.com/corverroos", network: "github" },
    ],
  },
  {
    heading: "Chris Battenfield",
    image: "https://obol.tech/assets/team/Chris.png",
    subheading: "Product Lead",
    links: [
      { link: "https://twitter.com/battenfield", network: "twitter" },
      { link: "https://github.com/battenfield", network: "github" },
    ],
  },
  {
    heading: "Dhruv Bodani",
    image: "https://obol.tech/assets/team/Dhruv.png",
    subheading: "Software Engineer",
    links: [
      { link: "https://twitter.com/dhruvbodani", network: "twitter" },
      { link: "https://github.com/dB2510", network: "github" },
    ],
  },
  {
    heading: "Abishek Kumar",
    image: "https://obol.tech/assets/team/Abhishek.png",
    subheading: "Software Engineer",
    links: [
      { link: "https://twitter.com/xenowits", network: "twitter" },
      { link: "https://github.com/xenowits", network: "github" },
    ],
  },
  {
    heading: "Edax Uclés",
    image: "https://obol.tech/assets/team/Edax.png",
    subheading: "Full Stack / UI Engineer",
    links: [
      { link: "https://twitter.com/f1miyamoto", network: "twitter" },
      { link: "https://github.com/f1lander", network: "github" },
    ],
  },
  {
    heading: "Richard Malone",
    image: "https://obol.tech/assets/team/RichardMalone.png",
    subheading: "Head of Business",
    links: [
      { link: "https://twitter.com/crypto_malone", network: "twitter" },
      { link: "https://github.com/richardtmalone", network: "github" },
    ],
  },
  {
    heading: "Thomas Heremans",
    image: "https://obol.tech/assets/team/Thomas.png",
    subheading: "Technical Project Manager",
    links: [
      { link: "https://twitter.com/cryp_thomas_", network: "twitter" },
      { link: "https://github.com/thomasheremans", network: "github" },
    ],
  },
  {
    heading: "Hanan Nouman",
    image: "https://obol.tech/assets/team/Hanan.png",
    subheading: "Frontend Engineer",
    links: [
      { link: "https://twitter.com/hanannouman", network: "twitter" },
      { link: "https://github.com/HananINouman", network: "github" },
    ],
  },
  {
    heading: "Brett Li",
    image: "https://obol.tech/assets/team/Brett.png",
    subheading: "Growth Lead",
    links: [
      { link: "https://twitter.com/ComposeBrett", network: "twitter" },
      { link: "https://github.com/Composeus", network: "github" },
    ],
  },
  {
    heading: "Jenia Barkanova",
    image: "https://obol.tech/assets/team/Jenia.png",
    subheading: "Marketing Strategy Advisor",
    links: [{ link: "https://twitter.com/JeniaBark", network: "twitter" }],
  },
  {
    heading: "Francis Hackett",
    image: "https://obol.tech/assets/team/Francis.png",
    subheading: "Legal Counsel",
    links: [{ link: "https://twitter.com/lexstake1", network: "twitter" }],
  },
  {
    heading: "Luke Hackett",
    image: "https://obol.tech/assets/team/Luke.png",
    subheading: "Software Engineer",
    links: [
      { link: "https://twitter.com/Luke_ObolLabs", network: "twitter" },
      { link: "https://github.com/LukeHackett12", network: "github" },
    ],
  },
  {
    heading: "Nanni Sackmann",
    image: "https://obol.tech/assets/team/Nanni.png",
    subheading: "Head of People",
    links: [{ link: "https://twitter.com/nannisack", network: "twitter" }],
  },
];

const TemplateArray: ComponentStory<typeof TeamMemberCard> = (args) => {
  return (
    <Box css={{ display: "flex", "@sm": { fd: "column" }, gap: "$md" }}>
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
