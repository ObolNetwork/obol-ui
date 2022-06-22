import { ComponentStory, ComponentMeta } from "@storybook/react";

import {
  ArrowForward,
  ObolDarkBgH,
  ObolLightBgH,
  ObolSolidLightBgH,
  ObolSolidDarkBgH,
} from "./index";
import { Box, Text } from "../atoms/index";
import {
  ObolDarkBgV,
  ObolLightBgV,
  ObolSolidDarkBgV,
  ObolSolidLightBgV,
} from "./static-icons/obol/vertical";
import {
  ObolDarkBgMark,
  ObolLightBgMark,
  ObolSolidDarkBgMark,
  ObolSolidLightBgMark,
} from "./static-icons/obol/mark";
import { ObolDarkCircle, ObolLightCircle } from "./static-icons/obol/circle";
import { AlertIcon } from "./AlertIcon";

export default {
  title: "Design System/Atoms/SvgIcon",
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => (
  <Box
    css={{
      display: "flex",
      flexDirection: "column",
      gap: "$xxs",
    }}
  >
    {args.children}
  </Box>
);

export const SingleArrowDownLeftIcon = Template.bind({});

SingleArrowDownLeftIcon.args = {
  children: (
    <>
      <Box css={{ display: "flex", gap: "$xxs" }}>
        <p>xs (10px)</p>
        <ArrowForward size="sm" color="obolBlue" />
      </Box>
      <Box css={{ display: "flex", gap: "$xxs" }}>
        <p>sm (12px)</p>
        <ArrowForward size="md" color="obolBlue" />
      </Box>
      <Box css={{ display: "flex", gap: "$xxs" }}>
        <p>md (16px)</p>
        <ArrowForward size="lg" color="textGreen1" />
      </Box>
      <Box css={{ display: "flex", gap: "$xxs" }}>
        <p>lg (24px)</p>
        <ArrowForward size="xl" color="obolBlue" />
      </Box>
      <Box css={{ display: "flex", gap: "$xxs" }}>
        <p>lg (24px)</p>
        <AlertIcon size="xl" color="body" />
      </Box>
      <Box css={{ display: "flex", gap: "$xxs" }}>
        <p>lg (24px)</p>
        <AlertIcon size="sm" color="body" />
      </Box>
    </>
  ),
};

const Template2: ComponentStory<typeof Box> = (args) => (
  <Box
    css={{
      display: "flex",
      gap: "$xs",
    }}
  >
    {args.children}
  </Box>
);

export const ObolLogoIcons = Template2.bind({});

ObolLogoIcons.args = {
  children: (
    <>
      <Box
        css={{
          display: "flex",
          gap: "$xs",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Text size="5">Horizontal</Text>
        <Box css={{ padding: "$xs", backgroundColor: "$bg01" }}>
          <ObolDarkBgH />
        </Box>
        <Box css={{ padding: "$xs" }}>
          <ObolLightBgH />
        </Box>
        <Box css={{ padding: "$xs", backgroundColor: "$bg01" }}>
          <ObolSolidDarkBgH />
        </Box>
        <Box css={{ padding: "$xs" }}>
          <ObolSolidLightBgH />
        </Box>
      </Box>
      <Box
        css={{
          display: "flex",
          gap: "$xs",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Text size="5">Vertical</Text>
        <Box css={{ padding: "$xs", backgroundColor: "$bg01" }}>
          <ObolDarkBgV />
        </Box>
        <Box css={{ padding: "$xs" }}>
          <ObolLightBgV />
        </Box>
        <Box css={{ padding: "$xs", backgroundColor: "$bg01" }}>
          <ObolSolidDarkBgV />
        </Box>
        <Box css={{ padding: "$xs" }}>
          <ObolSolidLightBgV />
        </Box>
      </Box>
      <Box
        css={{
          display: "flex",
          gap: "$xs",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Text size="5">Logo Mark</Text>
        <Box css={{ padding: "$xs", backgroundColor: "$bg01" }}>
          <ObolDarkBgMark />
        </Box>
        <Box css={{ padding: "$xs" }}>
          <ObolLightBgMark />
        </Box>
        <Box css={{ padding: "$xs", backgroundColor: "$bg01" }}>
          <ObolSolidDarkBgMark />
        </Box>
        <Box css={{ padding: "$xs" }}>
          <ObolSolidLightBgMark />
        </Box>
      </Box>
      <Box
        css={{
          display: "flex",
          gap: "$xs",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Text size="5">Circle</Text>
        <Box css={{ padding: "$xs", backgroundColor: "$bg01" }}>
          <ObolDarkCircle />
        </Box>
        <Box css={{ padding: "$xs", backgroundColor: "$bg01" }}>
          <ObolLightCircle />
        </Box>
      </Box>
    </>
  ),
};

// NOTE: size="xs" is default variant
