import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import { TextField, TextFieldWithCopy, TextFieldStory } from "./TextField";

export default {
  title: "Design System/Atoms/TextField",
  component: TextField,
  decorators: [withDesign],
} as ComponentMeta<typeof TextFieldStory>;

const Template: ComponentStory<typeof TextFieldStory> = (args) => (
  <TextField placeholder="Placehodlre" {...args}></TextField>
);

export const Default = Template.bind({});

Default.args = {};

const TemplateWithCopy: ComponentStory<typeof TextFieldWithCopy> = (args) => (
  <TextFieldWithCopy {...args}></TextFieldWithCopy>
);

export const DefaultTextFieldWithCopy = TemplateWithCopy.bind({});

DefaultTextFieldWithCopy.args = {};
