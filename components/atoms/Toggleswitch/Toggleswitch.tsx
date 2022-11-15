import { styled } from "../../../stitches.config";
import * as Switch from "@radix-ui/react-switch";
import React from "react";

export const SwitchRoot = styled(Switch.Root, {
  width: "50px",
  height:" 25px",
  border:"0",
  backgroundColor: "$bg04",
  borderRadius: "9999px",
  padding:"0",
  "&[data-state='checked']":{
    backgroundColor: "$obolGreen",
  }
});

export const SwitchThumb = styled(Switch.Thumb, {
    display: "block",
    width: "21px",
    height: "21px",
    backgroundColor: "white",
    borderRadius: "9999px",
    transition: "transform 100ms",
    transform: "translateX(0px)",
    "&[data-state='checked']":{
        transform: "translateX(29px)",
      }
  });


export const Toggleswitch: React.FC<Switch.SwitchProps> = ({ ...props }) => {
  return (
    <SwitchRoot { ...props }>
        <SwitchThumb  />
      </SwitchRoot>
  );
};