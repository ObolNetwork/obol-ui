import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, Text } from "../../atoms";
import { HeroSection, HeroSectionProps } from "./HeroSection";

export default {
  title: "Design System/Organisms/HeroSection",
  component: HeroSection,
} as ComponentMeta<typeof HeroSection>;

const Template: ComponentStory<typeof HeroSection> = (
  args: HeroSectionProps
) => <HeroSection {...args}></HeroSection>;

export const Default = Template.bind({});

const DescriptionContent = () => (
  <>
    The Obol Network is an ecosystem for trust minimized staking that allows
    people to{" "}
    <Text css={{ display: "inline-block" }} color="create" glow>
      create
    </Text>
    ,
    <Text css={{ display: "inline" }} color="test" glow>
      {" "}
      test
    </Text>
    ,
    <Text css={{ display: "inline" }} color="obolGreen" glow>
      {" "}
      run
    </Text>{" "}
    &
    <Text css={{ display: "inline" }} color="coordinate" glow>
      {" "}
      co-ordinate
    </Text>{" "}
    distributed validators
  </>
);
Default.args = {
  heading: "Building Distributed Validators for Ethereum",
  content: <DescriptionContent />,
  children: <Button>Read the Docs</Button>,
};

export const DvLaunchpad = Template.bind({});

DvLaunchpad.args = {
  heading: "Distribute Your Validators",
  content:
    "Create an Obol Cluster solo or with a group using the Distributed Validator Launchpad.",
};
