import * as Stitches from "@stitches/react";
import { forwardRef, useEffect, useState } from "react";
import { modifyVariantsForStory } from "../../utils";
import { Box, IconButton, TextField } from "../index";

interface NumberFieldProps {
  value?: number;
  onChangeValue?(value: number): void;
  // sets the max value to increase number field value
  max?: number;
  // sets the min value to increase number field value
  min?: number;
}

export const NumberField = forwardRef<HTMLInputElement, NumberFieldProps>(
  ({ max = 10, min = 1, value, onChangeValue }, ref) => {
    const [qty, setQty] = useState(value || min);

    const handleOnDec = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (qty <= min) {
        setQty(min);
      } else {
        setQty(qty - 1);
      }
    };
    const handleOnInc = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (qty >= max) {
        setQty(max);
      } else {
        setQty(qty + 1);
      }
    };

    const handleOnChange = (e: any) => {
      const value = e.target as number;
      if (value > max) {
        setQty(max);
      } else if (value < min) {
        setQty(min);
      } else {
        setQty(value);
      }
    };

    useEffect(() => {
      if (qty && onChangeValue) {
        onChangeValue(qty);
      }
    }, [qty, onChangeValue]);
    return (
      <Box
        css={{
          display: "flex",
          "input::-webkit-inner-spin-button": {
            "-webkit-appearance": "none",
            margin: 0,
          },

          /* Firefox */
          "input[type=number]": {
            "-moz-appearance": "textfield",
          },

          "& .dec-button": {
            btlr: "2px",
            bblr: "2px",
            btrr: 0,
            bbrr: 0,
          },

          "& .inc-button": {
            btlr: 0,
            bblr: 0,
            btrr: "2px",
            bbrr: "2px",
          },

          "& button": {
            display: "grid",
            placeItems: "center",
            color: "$textLight",
            width: "48px",
            fontSize: "$8",
          },

          "& input": {
            borderRadius: 0,
            width: "95px",
          },
        }}
      >
        <IconButton
          disabled={qty <= min}
          className="dec-button"
          onClick={handleOnDec}
          borderDisabled={qty <= min}
        >
          -
        </IconButton>
        <TextField
          css={{ borderRightStyle: "none", borderLeftStyle: "none" }}
          type="number"
          ref={ref}
          value={qty}
          onChange={handleOnChange}
        />
        <IconButton
          disabled={qty >= max}
          className="inc-button"
          onClick={handleOnInc}
          borderDisabled={qty >= max}
        >
          +
        </IconButton>
      </Box>
    );
  }
);

NumberField.displayName = "NumberField";
