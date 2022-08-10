import { styled } from "../../../stitches.config";
import { CheckboxIcon } from "../../icons";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import React from "react";

export const CheckboxRoot = styled(CheckboxPrimitive.Root, {
  bc: "$bg03",
  size: "$lg",
  border: "2px solid $body",
  br: "$xxxs",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const CheckboxIndicator = CheckboxPrimitive.Indicator;

interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {}

export const Checkbox: React.FC<CheckboxProps> = ({ ...props }) => {
  return (
    <CheckboxRoot {...props}>
      <CheckboxIndicator>
        <CheckboxIcon />
      </CheckboxIndicator>
    </CheckboxRoot>
  );
};
