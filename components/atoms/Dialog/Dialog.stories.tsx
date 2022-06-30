import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { Download } from "../../icons";
import { Coinbase } from "../../icons/static-icons/Coinbase";
import { Metamask } from "../../icons/static-icons/Metamask";
import { WalletConnect } from "../../icons/static-icons/WalletConnect";
import { Button, Box } from "../index";
import { DialogComponent } from "./Dialog";

export default {
  title: "Design System/Molecules/Dialog",
  component: DialogComponent,
  decorators: [withDesign],
} as ComponentMeta<typeof DialogComponent>;

const Template: ComponentStory<typeof DialogComponent> = (args) => (
  <DialogComponent {...args}>{args.children}</DialogComponent>
);

export const Default = Template.bind({});

Default.args = {
  triggerElement: <Button>Connect Wallet</Button>,
  title: "Connect Your Wallet",
  children: (
    <Box
      css={{
        display: "grid",
        gap: "$md",
        gridTemplateColumns: "repeat(2, 1fr)",
      }}
    >
      <Button variant="wallet">
        <Metamask />
        Metamask
      </Button>
      <Button variant="wallet">
        <WalletConnect />
        Wallet Connect
      </Button>
      <Button variant="wallet">
        <Coinbase />
        Coinbase
      </Button>
    </Box>
  ),
};

Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/iXKExkvVS8K9Vc13mz3jxk/Deep-Work-x-Obol?node-id=2653%3A7756",
  },
};
