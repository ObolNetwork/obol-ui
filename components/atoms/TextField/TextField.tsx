import * as Stitches from "@stitches/react";
import {
  forwardRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { styled } from "../../../stitches.config";
import { CopyIcon, CheckIcon } from "../../icons";
import { Box } from "../Box/Box";
import { IconButton } from "../IconButton/IconButton";
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

type TextFieldType = Stitches.ComponentProps<typeof TextField>;
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
  "& svg": {
    fill: "$bg05",
  },
});

export const TextFieldWithCopy = forwardRef<HTMLInputElement, TextFieldType>(
  (props, ref) => {
    const [inputValue, setInputValue] = useState<string>();
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipBoard = (content: string | undefined) => {
      if (content) {
        navigator.clipboard.writeText(content);
        setIsCopied(true);
      }
    };

    useTimeout(
      () => {
        setIsCopied(false);
      },
      isCopied ? 3000 : null
    );

    return (
      <Box css={{ display: "flex", width: "$full" }}>
        <TextField
          withCopy
          ref={ref}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          {...props}
          css={{ width: "$full" }}
        />
        <Tooltip open={isCopied}>
          <TooltipTrigger asChild>
            <IconButton onClick={() => copyToClipBoard(inputValue)}>
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
  }
);

TextFieldWithCopy.displayName = "TextFieldWithCopy";
