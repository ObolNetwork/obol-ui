import Image from "next/image";
import { styled } from "../../../stitches.config";
import { Box, Text, Link } from "../../atoms";
import { ArrowForward } from "../../icons";

export interface CardProps {
  heading: string;
  image: JSX.Element | string;
  link?: string;
  variant?: "icon" | "image";
  subheading?: string;
  contentAlign?: "start" | "end";
}

const CardImage = styled(Image, {
  btrr: "$4",
  btlr: "$4",
});

const GlowIconBox = styled("div", {
  position: "block",
  $$size: "$space$3xl",
  width: "$$size",
  height: "$$size",

  "&::before": {
    content: " ",
    width: "$$size",
    height: "$$size",
    position: "absolute",
    background: "linear-gradient(180deg, $obolGreen 0%, $obolGreenLight 100%)",
    opacity: "0.3",
    filter: "blur(18px)",
    borderRadius: "310px",
  },
});

const Content = (props: any) => (
  <Box
    css={{
      display: "flex",
      gap: "$xs",
      flexDirection: "column",
      justifyContent: "center",
      $$textAlign: props.contentAlign || "center",
      alignItems: "$$textAlign",
      textAlign: "$$textAlign",
      "& span": {
        textAlign: "$$textAlign",
      },
    }}
  >
    <Text css={{ fontWeight: "$bold" }} size="5" color="textLight">
      {props.heading}
    </Text>
    {props.subheading && (
      <Text css={{ lineHeight: "$base", color: "$body" }} size="4">
        {props.subheading}
      </Text>
    )}
    {props.link && (
      <Link href={props.link}>
        Learn More <ArrowForward />
      </Link>
    )}
  </Box>
);

export const Card: React.FC<CardProps> = ({
  variant = "icon",
  ...props
}): JSX.Element => (
  <Box
    css={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: "$bg03",
      borderRadius: "$4",
      width: "395px",
      "@sm": {
        width: "297px",
      },
    }}
  >
    {variant == "image" && (
      <Box
        css={{
          position: "relative",
          width: "395px",
          height: "222px",
          "@sm": {
            width: "297px",
          },
        }}
      >
        <CardImage
          src={props.image as string}
          layout="fill"
          objectFit="fill"
          alt={props.heading}
        />
      </Box>
    )}
    <Box
      css={{
        display: "flex",
        p: "$xl",
        gap: "$xl",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {variant == "icon" && <GlowIconBox>{props.image}</GlowIconBox>}
      <Content {...props} />
    </Box>
  </Box>
);
