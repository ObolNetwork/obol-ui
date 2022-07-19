import React from "react";
import { CSS } from "../../../stitches.config";
import { Spin, Button } from "..";
import { ButtonComponentProps } from "../Button/Button";

interface LoadingButtonProps extends ButtonComponentProps {
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
