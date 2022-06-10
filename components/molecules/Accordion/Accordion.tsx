import React from "react";
import { styled, keyframes } from "../../../stitches.config";
import { ChevronDownIcon } from "../../icons";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: "var(--radix-accordion-content-height)" },
});

const slideUp = keyframes({
  from: { height: "var(--radix-accordion-content-height)" },
  to: { height: 0 },
});

const StyledItem = styled(AccordionPrimitive.Item, {
  overflow: "hidden",
  marginTop: 1,
});

const StyledHeader = styled(AccordionPrimitive.Header, {
  all: "unset",
  display: "flex",
});

const StyledTrigger = styled(AccordionPrimitive.Trigger, {
  all: "unset",
  $$boxShadowColor: "$colors$muted",
  fontFamily: "inherit",
  backgroundColor: "transparent",
  height: 30,
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: 15,
  textTransform: "uppercase",
  fontWeight: "$bold",
  lineHeight: 1,
  color: "$$boxShadowColor",
  borderBottom: "2px solid $$boxShadowColor",
  '&[data-state="closed"]': {
    backgroundColor: "transparent",
  },
  '&[data-state="open"]': {
    $$boxShadowColor: "$colors$textLight",
    backgroundColor: "transparent",
  },
  "&:hover": { $$boxShadowColor: "$colors$textLight" },
});

const StyledContent = styled(AccordionPrimitive.Content, {
  overflow: "hidden",
  fontSize: 15,
  color: "$textLight",
  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`,
  },
});

const StyledChevron = styled(ChevronDownIcon, {
  color: "$textLight",
  transition: "transform 300ms cubic-bezier(0.87, 0, 0.13, 1)",
  "[data-state=open] &": { transform: "rotate(180deg)" },
});

const StyledRoot = styled(AccordionPrimitive.Root, {
  display: "flex",
  flexDirection: "column",
  gap: "$lg",
});

// Exports

export const Root = StyledRoot;
export const Item = StyledItem;
// eslint-disable-next-line react/display-name
export const Trigger: React.FC = ({ children, ...props }) => (
  <StyledHeader>
    <StyledTrigger {...props}>
      {children}
      <StyledChevron aria-hidden />
    </StyledTrigger>
  </StyledHeader>
);
// eslint-disable-next-line react/display-name
export const Content: React.FC = ({ children, ...props }) => (
  <StyledContent {...props}>{children}</StyledContent>
);
