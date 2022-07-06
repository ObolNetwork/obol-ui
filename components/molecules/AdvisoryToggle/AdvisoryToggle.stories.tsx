import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "../../atoms";
import { AdvisoryToggleBullet } from "./AdvisoryToggle";

export default {
  title: "Design System/Atoms/AdvisoryToggle",
  component: AdvisoryToggleBullet,
} as ComponentMeta<typeof AdvisoryToggleBullet>;

const Template: ComponentStory<typeof AdvisoryToggleBullet> = (args) => (
  <Box css={{ backgroundColor: "$bg03" }}>
    <AdvisoryToggleBullet {...args}>{args.children}</AdvisoryToggleBullet>
  </Box>
);

export const DefaultAdvisoryToggleBullet = Template.bind({});

DefaultAdvisoryToggleBullet.args = {
  state: "completed",
  children: "Proof of Stake Ethereum",
};
