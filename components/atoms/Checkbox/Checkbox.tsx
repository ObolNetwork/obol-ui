import { styled } from "../../../stitches.config";
import { CheckboxIcon } from "../../icons";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import React from "react";

export const CheckboxRoot = styled(CheckboxPrimitive.Root, {
  bc: "$bg03",
  size: "$lg",
  border: "2px solid $body",
  br: "$1",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const CheckboxIndicator = CheckboxPrimitive.Indicator;

export const Checkbox: React.FC<CheckboxPrimitive.CheckboxProps> = ({
  ...props
}) => {
  return (
    <CheckboxRoot {...props}>
      <CheckboxIndicator>
        <CheckboxIcon />
      </CheckboxIndicator>
    </CheckboxRoot>
  );
};
