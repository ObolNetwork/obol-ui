import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { Box, Button, Link, Text } from "../../atoms";
import { ArrowForward } from "../../icons";
import { Advisory, AdvisoryItemProps, Flex } from "./Advisory";

export default {
  title: "Design System/Organisms/Advisory",
  component: Advisory,
} as ComponentMeta<typeof Advisory>;

const Template: ComponentStory<typeof Advisory> = (args) => {
  const [items, setItems] = useState(args.items);
  const [itemSelected, setItemSelected] = useState<AdvisoryItemProps>(
    args.items[0],
  );
  const handleOnUpdateState = (rank: number) => {
    setItems(
      items.map((item) => {
        if (item.rank === rank + 1) {
          setItemSelected(item);
          return { ...item, state: "enabled" };
        }
        return item;
      }),
    );
  };

  const handleOnComplete = () => {
    console.log("complete");
  };

  const handleOnBack = (rank: number) => {
    setItems(
      items.map((item) => {
        if (item.rank === rank) {
          return { ...item, state: "upcoming" };
        }
        return item;
      }),
    );
    const itemBehind = items.find((item) => item.rank === rank - 1);
    if (itemBehind) setItemSelected(itemBehind);
  };

  const handleOnItemChange = (item: AdvisoryItemProps) => {
    setItemSelected(item);
  };

  return (
    <Advisory
      itemSelected={itemSelected}
      items={items}
      onItemChange={handleOnItemChange}
      onComplete={handleOnComplete}
      onUpdateState={handleOnUpdateState}
      onBack={handleOnBack}
    ></Advisory>
  );
};

export const Default = Template.bind({});

Default.args = {
  items: [
    {
      title: "Proof of Stake",
      rank: 1,
      state: "enabled",
      value: "Proof of Stake",
      enableNextStep: true,
      content: (value, enableNextStep, onAccept) => (
        <Flex css={{ gap: "$xl" }}>
          <Text variant="h4">Proof of stake Ethereum</Text>
          <Text color="body" variant="h5">
            The Beacon Chain upgrade brings proof-of-stake consensus to
            Ethereum. For this, we need active participants - known as
            validators - to propose, verify, and vouch for the validity of
            blocks.
          </Text>
          <Text
            color="body"
            variant="h5"
          >{`In exchange, honest validators receive financial rewards. Importantly, as a validator you'll need to post ETH as collateral - in other words, have some funds at stake.`}</Text>
          <Text color="body" variant="h5">
            The only way to become a validator is to make a one-way ETH
            transaction to the deposit contract on the current Ethereum chain.{" "}
          </Text>
          <Flex css={{ gap: "$sm" }}>
            <Link href="https://docs.obol.tech" target="_blank">
              More on Charon
              <ArrowForward size="md" />
            </Link>
            <Link
              href="https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/"
              target="_blank"
            >
              More on Proof of Stake
              <ArrowForward size="md" />
            </Link>
          </Flex>
          <Button
            disabled={!enableNextStep}
            fullWidth
            onClick={() => onAccept && onAccept(value)}
          >
            I Accept
          </Button>
        </Flex>
      ),
    },
    {
      title: "Understanding Distributed Validators",
      rank: 2,
      state: "upcoming",
      value: "Understanding Distributed Validators",
      enableNextStep: true,
      content: (value, enableNextStep, onAccept, onBack) => {
        return (
          <Box>
            <Text>Understanding Distributed Validators</Text>
            <Button onClick={() => onBack && onBack(value)}>onBack</Button>
            <Button onClick={() => onAccept && onAccept(value)}>
              onAccept
            </Button>
          </Box>
        );
      },
    },
    {
      title: "Group Risk",
      rank: 3,
      state: "upcoming",
      value: "Group Risk",
      enableNextStep: false,
      content: (value, enableNextStep, onAccept, onBack) => (
        <Box>
          <Text>Group Risk</Text>
          <Button onClick={() => onBack && onBack(value)}>onBack</Button>
          <Button onClick={() => onAccept && onAccept(value)}>onAccept</Button>
        </Box>
      ),
    },
  ],
};
