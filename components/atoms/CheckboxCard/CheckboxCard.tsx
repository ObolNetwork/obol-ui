import { styled } from "../../../stitches.config";
import { Box, Link, Text } from "..";
import { AlertIcon, ArrowForward } from "../../icons";
import { CheckIcon } from "@radix-ui/react-icons";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

export const CheckboxCardContainer = styled(Box, {
  backgroundColor: "$bg03",
  borderRadius: "$1",
  display: "flex",
  gap: "$xs",
  p: "$sm",
  boxSizing: "border-box",
  width: "$full",
});

const Checkbox = styled(CheckboxPrimitive.Root, {
  backgroundColor: " #182D32",
  width: "24px",
  height: "24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: " 2px solid #475E64",
  borderRadius: "4px",
});

const CheckboxIndicator = styled(CheckboxPrimitive.Indicator, {
  color: "#9CC2C9",
});

export interface CheckboxProps {
  text: string;
}

export const CheckboxCard: React.FC<CheckboxProps> = ({ text }) => (
  <CheckboxCardContainer>
    <Box>
      <Checkbox defaultChecked>
        <CheckboxIndicator>
          <CheckIcon />
        </CheckboxIndicator>
      </Checkbox>
    </Box>
    <Box css={{ display: "flex", fd: "column", gap: "$sm" }}>
      <Box css={{ display: "flex", fd: "column", gap: "$xs" }}>
        <Text variant="body">{text}</Text>
      </Box>
    </Box>
  </CheckboxCardContainer>
);
