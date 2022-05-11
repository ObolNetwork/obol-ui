import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "../Box/Box";

import { Text, TextStory } from "./Text";

export default {
  title: "Design System/Atoms/Text",
  component: Text,
} as ComponentMeta<typeof TextStory>;

const Template: ComponentStory<typeof TextStory> = (args) => (
  <Text {...args}>{args.children}</Text>
);

const TemplateNeon = () => (
  <Box css={{ position: "relative" }}>
    <Text glow color="coordinate" size="5" css={{ position: "absolute" }}>
      co-ordinate
    </Text>
    <Text color="coordinate" size="5" css={{ position: "absolute" }}>
      co-ordinate
    </Text>
  </Box>
);

export const Default = Template.bind({});

Default.args = {
  children: "co-ordinate",

};

export const WithNeon = TemplateNeon.bind({});
