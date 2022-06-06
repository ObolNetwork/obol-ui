import Image from "next/image";
import { CSS, styled } from "../../../stitches.config";
import { Box, Text, Link, Container } from "../../atoms";
import { ArrowForward } from "../../icons";

export interface CardProps {
  image: JSX.Element | string;
  heading?: string;
  imageWidth?: number | string;
  imageHeight?: number | string;
  link?: string;
  variant?: "icon" | "image";
  subheading?: string;
  contentAlign?: "start" | "end";
  gradientBg?: boolean;
  css?: CSS;
}

const CardImage = styled(Image, {
  btrr: "$4",
  btlr: "$4",
});

const Content = (props: any) => (
  <Container alignItems={props.contentAlign || "center"} ghost>
    <Container
      alignItems={props.contentAlign || "center"}
      css={{ gap: "$xs" }}
      ghost
    >
      {props.heading && (
        <Text css={{ fontWeight: "$bold" }} size="5" color="textLight">
          {props.heading}
        </Text>
      )}
      {props.subheading && (
        <Text css={{ lineHeight: "$base", color: "$body" }} size="4">
          {props.subheading}
        </Text>
      )}
    </Container>
    {props.link && (
      <Link href={props.link}>
        Learn More <ArrowForward />
      </Link>
    )}
  </Container>
);

export const Card: React.FC<CardProps> = ({
  css,
  gradientBg,
  variant = "icon",
  ...props
}): JSX.Element => (
  <Box
    className="box-card"
    css={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: gradientBg
        ? "linear-gradient(180deg, hsla(161, 77%, 54%, 0.2) 0%, hsla(82, 77%, 64%, 0.2) 100%)"
        : "$bg03",
      borderRadius: "$4",
      width: "auto",
      height: "100%",
      flex: 1,
      ...css,
    }}
  >
    {variant == "image" && (
      <Box
        className="box-card-image"
        css={{
          position: "relative",
          width: props.imageWidth || "395px",
          height: props.imageHeight || "222px",
          mt: props.imageWidth || props.imageHeight ? "$2xl" : 0,
          "@sm": {
            width: "$full",
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
      className="box-card-icon"
      css={{
        display: "flex",
        p: "$xl",
        gap: "$xl",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {variant == "icon" && props.image}
      <Content {...props} />
    </Box>
  </Box>
);
