import React from "react";
import { styled, keyframes, CSS } from "../../../stitches.config";
import { Cross2Icon } from "@radix-ui/react-icons";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Text } from "../index";

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: "hsla(190, 32%, 10%, 0.5)",
  position: "fixed",
  inset: 0,
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
});

const StyledContent = styled(DialogPrimitive.Content, {
  backgroundColor: "$bg02",
  borderRadius: 6,
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "450px",
  maxHeight: "85vh",
  padding: "$3xl",
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
  "&:focus": { outline: "none" },
});

const Content: React.FC = ({ children, ...props }) => {
  return (
    <DialogPrimitive.Portal className="dialog-portal-content">
      <StyledOverlay className="dialog-overlay" />
      <StyledContent className="dialog-styled-content" {...props}>
        {children}
      </StyledContent>
    </DialogPrimitive.Portal>
  );
};

const StyledTitle = styled(DialogPrimitive.Title, {
  margin: 0,
  fontWeight: "$bold",
  color: "$textLight",
  fontSize: "$8",
  textAlign: "center",
});

const StyledDescription = styled(DialogPrimitive.Description, {
  margin: "10px 0 20px",
  color: "$body",
  fontSize: 15,
  lineHeight: 1.5,
});

export const Dialog = styled(DialogPrimitive.Root, {});
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogContent = Content;
export const DialogTitle = StyledTitle;
export const DialogDescription = StyledDescription;
export const DialogClose = DialogPrimitive.Close;
export const DialogStyledContent = StyledContent;
export const DialogOverlay = StyledOverlay;
export const DialogPortal = DialogPrimitive.Portal;

export const DialogIconButton = styled("button", {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  height: 25,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$obolGreen",
  position: "absolute",
  top: 10,
  right: 10,
  cursor: "pointer",
  "&:hover": { backgroundColor: "$bg04" },
  "&:focus": { boxShadow: "0 0 0 2px $obolGreen" },
});

interface DialogComponentProps {
  triggerElement: React.ReactNode;
  title?: string | typeof Text;
  description?: string;
  css?: CSS;
}

export const DialogComponent: React.FC<DialogComponentProps> = (props) => (
  <Dialog css={props.css}>
    <DialogTrigger asChild>{props.triggerElement}</DialogTrigger>
    <DialogContent>
      <DialogTitle className="dialog-title" css={{ mb: "$xl" }}>
        {props.title}
      </DialogTitle>
      <DialogDescription className="dialog-description">
        {props.description}
      </DialogDescription>
      {props.children}
      <DialogClose asChild>
        <DialogIconButton aria-label="Close">
          <Cross2Icon />
        </DialogIconButton>
      </DialogClose>
    </DialogContent>
  </Dialog>
);
