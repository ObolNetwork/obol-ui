import { styled } from "../../../stitches.config";
import { Box, Text, Button, ToggleGroupItem } from "../../atoms";
import { BulletCheckIcon } from "../../icons";

interface AdvisoryBulletProps {
  state: BulletState;
  rank?: number;
  onClick(): void;
}
export type BulletState = "enabled" | "upcoming" | "completed";

export const AdvisoryToggleItem = styled(ToggleGroupItem, {
  all: "unset",
  backgroundColor: "transparent",
  border: "2px solid transparent",

  "&:hover": { cursor: "pointer" },
  "&[data-state-item=selected]": {
    "& .advisory-bullet": { borderLeft: "2px solid $obolGreen" },
  },
});
export const AdvisoryBullet: React.FC<AdvisoryBulletProps> = (props) => {
  let color: "light" | "body" | "muted" = "light";

  if (props.state === "completed") {
    color = "body";
  }

  if (props.state === "upcoming") {
    color = "muted";
  }
  return (
    <Box
      className="advisory-bullet"
      css={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "$xs",
        minHeight: "$2xl",
        pl: "calc($2xl - 2px)",
        ml: "-2px",
      }}
    >
      {props.state === "completed" ? (
        <BulletCheckIcon />
      ) : (
        <Box
          css={{
            display: "grid",
            placeItems: "center",
            width: "$lg",
            height: "$lg",
            backgroundColor:
              props.state === "upcoming" ? "$bg03" : "$obolMidGreen",
            borderRadius: "$round",
            fontSize: "$3",
            fontWeight: "$bold",
            color: props.state === "upcoming" ? "$muted" : "$obolGreen",
          }}
        >
          {props.rank}
        </Box>
      )}
      <Text color={color}>{props.children}</Text>
    </Box>
  );
};
