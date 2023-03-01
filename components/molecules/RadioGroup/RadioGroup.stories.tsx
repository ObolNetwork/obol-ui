import {
  RadioGroup,
  RadioGroupComponent,
  RadioGroupIndicator,
  RadioGroupItemLabel,
  RadioGroupRadio,
} from "./RadioGroup";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { Box } from "../../atoms";

export default {
  title: "Design System/Molecules/RadioGroupComponent",
  component: RadioGroupComponent,
} as ComponentMeta<typeof RadioGroupComponent>;

const Template: ComponentStory<typeof RadioGroupComponent> = (args) => {
  const [value, setValue] = useState<string>();
  return (
    <form style={{ backgroundColor: "#182D32" }}>
      {value}
      <RadioGroup
        value={value}
        onValueChange={(item) => setValue(item)}
        defaultValue="default"
        aria-label="View density"
      >
        <Box css={{ display: "flex", margin: "10px 0", alignItems: "center" }}>
          <RadioGroupRadio value="default" id="r1">
            <RadioGroupIndicator />
          </RadioGroupRadio>
          <RadioGroupItemLabel htmlFor="r1">Default</RadioGroupItemLabel>
        </Box>
        <Box css={{ display: "flex", margin: "10px 0", alignItems: "center" }}>
          <RadioGroupRadio value="comfortable" id="r2">
            <RadioGroupIndicator />
          </RadioGroupRadio>
          <RadioGroupItemLabel htmlFor="r2">Comfortable</RadioGroupItemLabel>
        </Box>
        <Box css={{ display: "flex", margin: "10px 0", alignItems: "center" }}>
          <RadioGroupRadio value="compact" id="r3">
            <RadioGroupIndicator />
          </RadioGroupRadio>
          <RadioGroupItemLabel htmlFor="r3">Compact</RadioGroupItemLabel>
        </Box>
      </RadioGroup>
    </form>
  );
};

export const Default = Template.bind({});

Default.args = {
  items: [
    { label: "Option 1", value: "Option 1" },
    { label: "Option 2", value: "Option 2" },
  ],
  defaultValue: "Option 1",
};
