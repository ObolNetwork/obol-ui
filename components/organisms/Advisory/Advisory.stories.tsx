import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { Box, Button, Text } from "../../atoms";
import { Advisory, AdvisoryItemProps } from "./Advisory";

export default {
  title: "Design System/Organisms/Advisory",
  component: Advisory,
} as ComponentMeta<typeof Advisory>;

const Template: ComponentStory<typeof Advisory> = (args) => {
  const [items, setItems] = useState(args.items);

  const [itemSelected, setItemSelected] = useState<AdvisoryItemProps>(args.items[0]);
  const handleOnUpdateState = (rank: number) => {
    debugger;
    setItems(
      items.map((item) => {
        return item.rank === rank + 1
          ? { ...item, state: "enabled" }
          : { ...item };
      })
    );
  };

  const handleOnComplete = () => {
    console.log("complete");
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
      content: (value, onBack, onAccept) => (
        <Box>
          <Button onClick={() => onBack && onBack(value)}>onBack</Button>
          <Button onClick={() => onAccept && onAccept(value)}>onAccept</Button>
        </Box>
      ),
    },
    {
      title: "Understanding Distributed Validators",
      rank: 2,
      state: "upcoming",
      value: "Understanding Distributed Validators",
      content: (value, onBack, onAccept) => (
        <Box>
          <Text>Understanding Distributed Validators</Text>
          <Button onClick={() => onBack && onBack(value)}>onBack</Button>
          <Button onClick={() => onAccept && onAccept(value)}>onAccept</Button>
        </Box>
      ),
    },
  ],
};
