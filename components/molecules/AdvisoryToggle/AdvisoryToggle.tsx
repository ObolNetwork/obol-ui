import { styled } from "../../../stitches.config";
import { Box, Text, Button, ToggleGroupItem } from "../../atoms";
import { BulletCheckIcon } from "../../icons";

interface AdvisoryToggleBulletProps {
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
export const AdvisoryToggleBullet: React.FC<AdvisoryToggleBulletProps> = (props) => {
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
        alignItems: "center",
        gap: "$xs",
        minHeight: "$2xl",
        pl: "calc($2xl - 2px)",
        ml: "-2px",
        borderLeft: "2px solid transparent"
      }}
    >
      {props.state === "completed" ? (
        <Box>
          <BulletCheckIcon />
        </Box>
      ) : (
        <Box>
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
        </Box>
      )}
      <Text color={color}>{props.children}</Text>
    </Box>
  );
};
