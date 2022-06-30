import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import { Button } from "../index";
import { TooltipComponent } from "./Tooltip";

export default {
  title: "Design System/Atoms/Tooltip",
  component: TooltipComponent,
  decorators: [withDesign],
} as ComponentMeta<typeof TooltipComponent>;

const Template: ComponentStory<typeof TooltipComponent> = (args) => (
  <TooltipComponent {...args}>{args.children}</TooltipComponent>
);

export const Default = Template.bind({});

Default.args = {
  children: <Button css={{ ml: "10rem" }}>Tooltip</Button>,
  side: "bottom",
  content: `An ENR is an "Ethereum Node Record", and is used to identify your client to the other clients in the cluster.`,
};
