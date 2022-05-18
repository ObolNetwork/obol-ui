import React from "react";
import * as Stitches from "@stitches/react";
import { CSS } from "../../../stitches.config";
import { Spin, Button } from "..";
import { ComponentProps } from "../Button/Button";

interface LoadingButtonProps extends ComponentProps {
  css?: CSS;
}

export const LoadingButton: React.FC<LoadingButtonProps> = ({
  loading,
  children,
  ...props
}) => {
  return (
    <Button {...props}>
      {loading && <Spin />}
      {children}
    </Button>
  );
};
