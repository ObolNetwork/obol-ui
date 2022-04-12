import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { Box } from "../index";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./Tabs";

const TabsDemo = () => (
  <Box
    css={{
      backgroundColor: "$cardBackgroundDark",
      color: "white",
      height:'80vh'
    }}
  >
    <Tabs defaultValue="tab1">
      <TabsList aria-label="Manage your account">
        <TabsTrigger value="tab1">Account</TabsTrigger>
        <TabsTrigger value="tab2">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Some content 1</TabsContent>
      <TabsContent value="tab2">Some content 2</TabsContent>
    </Tabs>
  </Box>
);

export default {
  title: "Design System/Molecules/Tabs",
  component: TabsDemo,
  decorators: [withDesign],
} as ComponentMeta<typeof TabsDemo>;

const Template: ComponentStory<any> = (args) => (
  <TabsDemo {...args}>{args.children}</TabsDemo>
);

export const Default = Template.bind({});

Default.args = {
  children: "Button",
};

Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/XV5QpuUQnYK5kOWcYA4Kpv/Deep-Work-x-Obol-(Copy)?node-id=57%3A1272",
  },
};
