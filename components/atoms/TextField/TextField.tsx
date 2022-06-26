import * as Stitches from "@stitches/react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

import { CSS, styled } from "../../../stitches.config";
import { CopyIcon, CheckIcon } from "../../icons";
import { modifyVariantsForStory } from "../../utils/types";
import { Box } from "../Box/Box";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "../Tooltip/Tooltip";

export const TextField = styled("input", {
  //reset
  appearance: "none",
  borderWidth: 0,
  boxSizing: "border-box",
  fontFamily: "inherit",
  margin: "0",
  outline: "none",
  padding: "0",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },

  borderRadius: "$1",
  border: "2px solid $bg04",
  backgroundColor: "$bg03",
  color: "$textLight",
  px: "$sm",
  py: "$xs",
  fontSize: "$4",
  "&:focus": {
    backgroundColor: "$bg02",
  },
  "&::placeholder": {
    color: "$muted",
  },

  variants: {
    withCopy: {
      true: {
        btrr: 0,
        bbrr: 0,
      },
    },
  },
});
interface TextFieldWithCopyProps {
  css?: CSS;
}

const IconButton = styled("button", {
  //reset
  all: "unset",
  alignItems: "center",
  boxSizing: "border-box",
  userSelect: "none",
  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },
  display: "flex",
  btrr: "$1",
  bbrr: "$1",
  p: "10px",
  backgroundColor: "$bg04",
  "&:hover": {
    backgroundColor: "$bg05",
    cursor: "pointer",
  },
});

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

function useTimeout(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback);

  // Remember the latest callback if it changes.
  useIsomorphicLayoutEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the timeout.
  useEffect(() => {
    // Don't schedule if no delay is specified.
    // Note: 0 is a valid value for delay.
    if (!delay && delay !== 0) {
      return;
    }

    const id = setTimeout(() => savedCallback.current(), delay);

    return () => clearTimeout(id);
  }, [delay]);
}

const Content = styled(TooltipContent, {
  borderRadius: "$1",
  backgroundColor: "$bg05",
  p: "$xxs",
  fontWeight: "$bold",
  color: "white",
  fontSize: "$2",
  "& svg":{
    fill: "$bg05"
  }
});

export const TextFieldWithCopy: React.FC<TextFieldWithCopyProps> = (props) => {
  const textRef: any = useRef();
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipBoard = (content: string) => {
    navigator.clipboard.writeText(content);
    setIsCopied(true);
  };

  useTimeout(
    () => {
      setIsCopied(false);
    },
    isCopied ? 3000 : null
  );

  return (
    <Box css={{ display: "flex" }}>
      <TextField withCopy ref={textRef} />

      <Tooltip open={isCopied}>
        <TooltipTrigger asChild>
          <IconButton onClick={() => copyToClipBoard(textRef.current.value)}>
            {!isCopied ? <CopyIcon /> : <CheckIcon />}
          </IconButton>
        </TooltipTrigger>
        <Content side="bottom" sideOffset={5}>
          Copied!
          <TooltipArrow />
        </Content>
      </Tooltip>
    </Box>
  );
};

TextFieldWithCopy.displayName = "TextFieldWithCopy";

/* Storybook utility for stitches variant props

NOTE: this can't live in the stories file because the storybook navigator will take a story and will crash
      I can't figure out why it can't be defined without being exported.
*/

type ComponentVariants = Stitches.VariantProps<typeof TextField>;
export type ComponentProps = ComponentVariants;

export const TextFieldStory =
  modifyVariantsForStory<ComponentVariants, ComponentProps, typeof TextField>(
    TextField
  );
