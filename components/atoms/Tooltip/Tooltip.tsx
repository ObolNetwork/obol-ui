import React, { useState } from "react";
import { styled, keyframes } from "../../../stitches.config";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const StyledContent = styled(TooltipPrimitive.Content, {
  borderRadius: "$1",
  padding: "$sm",
  fontSize: "$3",
  lineHeight: "$base",
  color: "$bg05",
  backgroundColor: "$tooltip",

  border: "$2 solid $tooltip2",
  maxWidth: "320px",
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  "@media (prefers-reduced-motion: no-preference)": {
    animationDuration: "400ms",
    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    animationFillMode: "forwards",
    willChange: "transform, opacity",
    '&[data-state="delayed-open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});

const StyledArrow = styled(TooltipPrimitive.Arrow, {
  fill: "$tooltip",
});

// Exports
export const Provider = TooltipPrimitive.Provider;
export const Tooltip = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;
export const TooltipContent = TooltipPrimitive.Content;
export const TooltipArrow = TooltipPrimitive.Arrow;

export interface TooltipComponentProps extends TooltipPrimitive.TooltipProps {
  content: React.ReactNode | string;
  side?: "top" | "bottom" | "right" | "left";
  sideOffset?: number;
  showOnClick?: boolean;
}

export const TooltipComponent: React.FC<TooltipComponentProps> = ({
  side = "bottom",
  sideOffset = 5,
  children,
  content,
  showOnClick,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const StyledContentComp = (
    <StyledContent
      className="tooltip-content"
      side={side}
      sideOffset={sideOffset}
    >
      {content}
      <StyledArrow className="arrow" />
    </StyledContent>
  );
  return (
    <Provider delayDuration={0} skipDelayDuration={100}>
      {showOnClick ? (
        <Tooltip {...props} open={open} onOpenChange={() => setOpen(false)}>
          <TooltipTrigger onClick={() => setOpen(true)} asChild>
            {children}
          </TooltipTrigger>
          {StyledContentComp}
        </Tooltip>
      ) : (
        <Tooltip {...props}>
          <TooltipTrigger asChild>{children}</TooltipTrigger>
          {StyledContentComp}
        </Tooltip>
      )}
    </Provider>
  );
};

TooltipComponent.displayName = "Tooltip";
