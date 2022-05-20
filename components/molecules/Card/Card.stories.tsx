import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CodeIcon } from "../../icons";
import { Card, CardProps } from "./Card";

export default {
  title: "Design System/Molecules/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args: CardProps) => (
  <Card {...args}></Card>
);

export const Default = Template.bind({});

Default.args = {
  heading: "Heading",
  subheading:
    "The Obol Network will forever be open source and permissionless. The impact of distributed validators lies in their accessibility.",
  image: <CodeIcon />,
  link: "https://obol.tech",
};

export const NoSubHeading = Template.bind({});

NoSubHeading.args = {
  heading: "Heading",
  image: <CodeIcon />,
  link: "https://obol.tech",
};

export const NoSubHeadingAndChildren = Template.bind({});

NoSubHeadingAndChildren.args = {
  heading: "Heading",
  image: <CodeIcon />,
};

export const NoChildren = Template.bind({});

NoChildren.args = {
  heading: "Heading",
  image: <CodeIcon />,
  subheading:
    "The Obol Network will forever be open source and permission-less. The impact of distributed validators lies in their accessibility.",
};

export const DefaultImageCard = Template.bind({});

DefaultImageCard.args = {
  heading: "Heading",
  subheading:
    "The Obol Network will forever be open source and permission-less. The impact of distributed validators lies in their accessibility.",
  image: 'https://image-component.nextjs.gallery/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1538361091%2Frepositories%2Fnext-js%2Fnext-js-bg.png&w=3840&q=75',
  variant: "image",
};

export const NoSubHeadingImageCard = Template.bind({});

NoSubHeadingImageCard.args = {
  heading: "Heading",
  image: 'https://image-component.nextjs.gallery/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1538361091%2Frepositories%2Fnext-js%2Fnext-js-bg.png&w=3840&q=75',
  link: "https://obol.tech",
  variant: "image",
};

export const NoSubHeadingAndChildrenImageCard = Template.bind({});

NoSubHeadingAndChildrenImageCard.args = {
  heading: "Heading",
  image: '/image-card.png',
  variant: "image",
};