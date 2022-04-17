import { ComponentStory, ComponentMeta } from "@storybook/react";

import { IconArrowForward } from "./index";
import { Box } from "../index";

export default {
  title: "Design System/Components/SvgIcon",
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => (
  <Box
    css={{
      display: "flex",
      flexDirection: "column",
      gap: "$sm",
    }}
  >
    {args.children}
  </Box>
);

export const SingleArrowDownLeftIcon = Template.bind({});

SingleArrowDownLeftIcon.args = {
  children: (
    <>
      <Box css={{ display: "flex", gap: "$sm" }}>
        <p>xs (10px)</p>
        <IconArrowForward size="xs" color="obolBlue" />
      </Box>
      <Box css={{ display: "flex", gap: "$sm" }}>
        <p>sm (12px)</p>
        <IconArrowForward size="sm" color="obolBlue" />
      </Box>
      <Box css={{ display: "flex", gap: "$sm" }}>
        <p>md (16px)</p>
        <IconArrowForward size="md" color="textGreen1" />
      </Box>
      <Box css={{ display: "flex", gap: "$sm" }}>
        <p>lg (24px)</p>
        <IconArrowForward size="lg" color="obolBlue" />
      </Box>
    </>
  ),
};

// NOTE: size="xs" is default variant
