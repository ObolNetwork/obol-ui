import { MouseEventHandler, useEffect, useState } from "react";
import { Box, Container, ToggleGroup } from "../../atoms";
import {
  AdvisoryBullet,
  AdvisoryToggleItem,
  BulletState,
} from "../../molecules/AdvisoryToggle/AdvisoryToggle";

export interface AdvisoryItemProps {
  title: string;
  value: string;
  rank: number;
  state: BulletState;
  content(
    value: number,
    onBack?: (value: number) => void,
    onAccept?: (value: number) => void,
    onComplete?: (value: string) => void
  ): JSX.Element;
}

export interface AdvisoryProps {
  items: AdvisoryItemProps[];
  itemSelected: AdvisoryItemProps;
  onItemChange(value: AdvisoryItemProps): void;
  onUpdateState(rank: number): void;
  onComplete(value: string): void;
}

export const Advisory: React.FC<AdvisoryProps> = ({
  onUpdateState,
  onItemChange,
  onComplete,
  itemSelected,
  ...props
}) => {
  const handleOnBack = (value: number) => {
    console.log("onBack", value);
  };

  const handleOnAccept = (value: number) => {
    console.log("onAccept", value);
    //TODO: enable the next item

    onUpdateState(value);
  };

  return (
    <Box
      css={{
        display: "flex",
        border: "2px solid $bg04",
        borderRadius: "$3",
        height: "752px",
      }}
    >
      <Box
        css={{
          display: "flex",
          fd: "column",
          flex: 1,
          py: "$xl",
          backgroundColor: "$bg02",
          borderRight: "2px solid $bg04",
          btlr: "$2",
          bblr: "$2",
        }}
      >
        <ToggleGroup
          css={{
            display: "flex",
            fd: "column",
            gap: "$xl",
          }}
          type="single"
          aria-label="Text alignment"
          onValueChange={(value) => {
            if (value !== "") {
              debugger;
              const content = props.items.find((item) => item.value === value);
              if (content) {
                onItemChange(content);
              }
            }
          }}
        >
          {props.items.map((item, index) => (
            <AdvisoryToggleItem
              key={`:at${index}:`}
              disabled={item.state === "upcoming"}
              value={item.value}
              aria-label={item.title}
              css={{ borderLeftWidth: "0px" }}
              data-state-item={
                item.value === itemSelected.value ? "selected" : ""
              }
            >
              <AdvisoryBullet
                key={`:ab${index}:`}
                state={item.state}
                rank={item.rank}
                onClick={() => console.log("enable next, complete this")}
              >
                {item.title}
              </AdvisoryBullet>
            </AdvisoryToggleItem>
          ))}
        </ToggleGroup>
      </Box>
      <Box
        css={{
          display: "flex",
          flex: 2,
          fd: "column",
          p: "$xl",
          backgroundColor: "$bg01",
          btrr: "$2",
          bbrr: "$2",
        }}
      >
        {itemSelected.content(itemSelected.rank, handleOnBack, handleOnAccept)}
      </Box>
    </Box>
  );
};
