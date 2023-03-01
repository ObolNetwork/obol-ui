import { useState } from "react";
import { styled } from "../../../stitches.config";
import { Box, ToggleGroup } from "../../atoms";

import {
  AdvisoryToggleBullet,
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
    enableNextStep: boolean,
    onAccept?: (value: number) => void,
    onBack?: (value: number) => void,
    onComplete?: (value: string) => void,
  ): JSX.Element;
  enableNextStep: boolean;
}

export interface AdvisoryProps {
  items: AdvisoryItemProps[];
  itemSelected: AdvisoryItemProps;
  onItemChange(value: AdvisoryItemProps): void;
  onUpdateState(rank: number): void;
  onComplete(value: string): void;
  onBack(rank: number): void;
}

export const Advisory: React.FC<AdvisoryProps> = ({
  onUpdateState,
  onItemChange,
  onComplete,
  onBack,
  itemSelected,
  ...props
}) => {
  const handleOnBack = (value: number) => {
    onBack(value);
  };

  const handleOnAccept = (value: number) => {
    onUpdateState(value);
  };

  return (
    <Box
      className="advisory-container"
      css={{
        display: "flex",
        border: "2px solid $bg04",
        borderRadius: "$3",
        minHeight: "752px",
      }}
    >
      <Box
        className="advisory-toggles"
        css={{
          display: "flex",
          fd: "column",
          flex: 1,
          py: "$xl",
          backgroundColor: "$bg02",
          borderRight: "2px solid $bg04",
          btlr: "$2",
          bblr: "$2",
          width: "330px",
        }}
      >
        <ToggleGroup
          css={{
            display: "flex",
            fd: "column",
            gap: "$xxs",
          }}
          type="single"
          aria-label="Text alignment"
          value={itemSelected.value}
          onValueChange={(value) => {
            if (value !== "") {
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
              <AdvisoryToggleBullet
                key={`:ab${index}:`}
                state={item.state}
                rank={item.rank}
                onClick={() => console.log("enable next, complete this")}
              >
                {item.title}
              </AdvisoryToggleBullet>
            </AdvisoryToggleItem>
          ))}
        </ToggleGroup>
      </Box>
      <Box
        className="advisory-content"
        css={{
          display: "flex",
          flex: 2,
          fd: "column",
          p: "$2xl",
          backgroundColor: "$bg01",
          btrr: "$2",
          bbrr: "$2",
        }}
      >
        {itemSelected.content(
          itemSelected.rank,
          itemSelected.enableNextStep,
          handleOnAccept,
          handleOnBack,
          onComplete,
        )}
      </Box>
    </Box>
  );
};

export const Flex = styled(Box, { display: "flex", fd: "column" });
