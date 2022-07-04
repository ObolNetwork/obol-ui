import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "../../atoms";
import { AdvisoryBullet } from "./AdvisoryToggle";

export default {
  title: "Design System/Atoms/AdvisoryToggle",
  component: AdvisoryBullet,
} as ComponentMeta<typeof AdvisoryBullet>;

const Template: ComponentStory<typeof AdvisoryBullet> = (args) => (
  <Box css={{ backgroundColor: "$bg03" }}>
    <AdvisoryBullet {...args}>{args.children}</AdvisoryBullet>
  </Box>
);

export const DefaultAdvisoryBullet = Template.bind({});

DefaultAdvisoryBullet.args = {
  state: "completed",
  children: "Proof of Stake Ethereum",
};
