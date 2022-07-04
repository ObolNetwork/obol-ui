import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Footer } from "./Footer";

export default {
  title: "Design System/Organisms/Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => (
  <Footer {...args}>{args.children}</Footer>
);

export const Default = Template.bind({});

Default.args = {};

export const WithSubheading = Template.bind({});
