import { LogoCard } from "../../atoms";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Design System/Atoms/LogoCard",
  component: LogoCard,
} as ComponentMeta<typeof LogoCard>;

const Template: ComponentStory<any> = (args: any) => (
  <LogoCard {...args}></LogoCard>
);

export const Default = Template.bind({});

Default.args = {
  heading: "Coinbase",
  link: "https://coinbase.com",
  image:
    "https://obol.tech/static/ethereal-ventures-ae639a593d5b14f9d5445c1062d5a56b.png",
  width: "200px",
  height: "80px",
};

export const ToggleCards = Template.bind({});
