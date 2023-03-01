import { styled } from "../../../stitches.config";
import * as ReactSwitch from "@radix-ui/react-switch";
import React from "react";

export const SwitchRoot = styled(ReactSwitch.Root, {
  width: "78px",
  height: "40px",
  border: "0",
  backgroundColor: "$lightGrey",
  borderRadius: "40px",
  padding: "0",
  "&[data-state='checked']": {
    backgroundColor: "$obolGreen",
  },
});

export const SwitchThumb = styled(ReactSwitch.Thumb, {
  display: "block",
  width: "30px",
  height: "30px",
  backgroundColor: "white",
  borderRadius: "40px",
  transition: "transform 100ms",
  transform: "translateX(4px)",
  "&[data-state='checked']": {
    transform: "translateX(40px)",
  },
});

export const Switch: React.FC<ReactSwitch.SwitchProps> = ({ ...props }) => {
  return (
    <SwitchRoot {...props}>
      <SwitchThumb />
    </SwitchRoot>
  );
};
