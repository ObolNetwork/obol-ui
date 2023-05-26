import { styled } from "../../../stitches.config";
import { TextField } from "../TextField/TextField";

export const UnstyledTextField = styled(TextField, {
  fontSize: "$4",
  border: "none",
  borderRadius: "0",
  backgroundColor: "transparent",
  px: 0,
  py: 0,
  "&:focus": {
    backgroundColor: "transparent",
  },
});