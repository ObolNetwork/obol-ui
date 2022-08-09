import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CheckboxCard } from "./CheckboxCard";

export default {
  title: "Design System/Atoms/CheckboxCard",
  component: CheckboxCard,
} as ComponentMeta<typeof CheckboxCard>;

const Template: ComponentStory<typeof CheckboxCard> = (args) => (
  <CheckboxCard {...args}>{args.children}</CheckboxCard>
);

export const Default = Template.bind({});

Default.args = {
  text: "I understand what a distributed validator is, and how its operation differs from a single-instance proof of stake ethereum validator. ",
};
