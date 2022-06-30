import React from "react";
import { styled } from "../../../stitches.config";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Box } from "../../atoms";

const StyledRadio = styled(RadioGroupPrimitive.Item, {
  all: "unset",
  backgroundColor: "$obolGreen",
  width: 25,
  height: 25,
  borderRadius: "100%",
  "&:hover": { filter: "brightness(90%)", cursor: "pointer" },
});

const StyledIndicator = styled(RadioGroupPrimitive.Indicator, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  position: "relative",
  "&::after": {
    content: '""',
    display: "absolute",
    position: "absolute",
    width: 11,
    height: 11,
    borderRadius: "50%",
    boxShadow: `0 0 0 4px #0E1E22`,
    backgroundColor: "#2FE4AB",
  },
});

// Exports
export const RadioGroup = RadioGroupPrimitive.Root;
export const RadioGroupRadio = StyledRadio;
export const RadioGroupIndicator = StyledIndicator;

export const RadioGroupItemLabel = styled("label", {
  color: "$textLight",
  fontSize: "$3",
  lineHeight: 1,
  userSelect: "none",
  paddingLeft: "$xxxs",
  textTransform: "uppercase",
});


// TODO: implemente all-in-one Radio Group component
interface RadioGroupItemProps {
  value: string;
  label: string;
  index?: number;
}

export const RadioGroupItem: React.FC<RadioGroupItemProps> = ({
  value,
  label,
  index = 1,
}) => {
  const id = `id-:r${index}:`;

  return (
    <Box css={{ display: "flex", margin: "10px 0", alignItems: "center" }}>
      <RadioGroupRadio value={value} id={id}>
        <RadioGroupPrimitive.RadioGroupIndicator />
      </RadioGroupRadio>
      <RadioGroupItemLabel htmlFor={id}>{label}</RadioGroupItemLabel>
    </Box>
  );
};

interface RadioGroupComponentsProps
  extends RadioGroupPrimitive.RadioGroupProps {
  items: RadioGroupItemProps[];
}
export const RadioGroupComponent: React.FC<RadioGroupComponentsProps> = ({
  items,
  value,
  onValueChange,
  ...props
}) => (
  <RadioGroup aria-label="View density" value={value} onValueChange={onValueChange} {...props}>
    {items.map((item, index) => (
      <RadioGroupItem
        key={`item-${item.label}-${index}`}
        {...item}
        index={index}
      />
    ))}
  </RadioGroup>
);
