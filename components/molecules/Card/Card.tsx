import { ToggleGroupItemProps } from "@radix-ui/react-toggle-group";
import Image from "next/image";
import { CSS, styled } from "../../../stitches.config";
import { Box, Text, Link, Container, ToggleGroupItem } from "../../atoms";
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
  toggle?: boolean;
  css?: CSS;
  value?: ToggleGroupItemProps["value"];
}

const CardImage = styled(Image, {
  btrr: "$4",
  btlr: "$4",
});

export const ToggleCardItem = styled(ToggleGroupItem, {
  all: "unset",
  background: "$bg03",
  borderRadius: "$4",
  border: "2px solid transparent",
  "&:hover": { backgroundColor: "$bg05" },
  "&[data-state=on]": {
    backgroundColor: "$bg05",
    border: "2px solid $obolGreen",
  },
});

const Content = (props: any) => (
  <Container
    className="card-container"
    alignItems={props.contentAlign || "center"}
    ghost
  >
    <Container
      className="card-container-text"
      alignItems={props.contentAlign || "center"}
      css={{ gap: "$xs" }}
      ghost
    >
      {props.heading && (
        <Text
          className="card-heading"
          variant="h5"
        >
          {props.heading}
        </Text>
      )}
      {props.subheading && (
        <Text
          className="card-subheading"
          css={{ lineHeight: "$base", color: "$body" }}
          size="4"
        >
          {props.subheading}
        </Text>
      )}
    </Container>
    {props.link && (
      <Link className="card-link" href={props.link}>
        Learn More <ArrowForward />
      </Link>
    )}
  </Container>
);

const BoxCard = styled(Box, {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "$4",
  width: "auto",
  height: "100%",
  background: "$bg03",
  flex: 1,
  variants: {
    toggle: {
      true: {
        border: "2px solid transparent",
        background: "transparent",
      },
    },
    gradientBg: {
      true: {
        background:
          "linear-gradient(180deg, hsla(161, 77%, 54%, 0.2) 0%, hsla(82, 77%, 64%, 0.2) 100%)",
      },
    },
  },
});

export const Card: React.FC<CardProps> = ({
  css,
  gradientBg,
  variant = "icon",
  ...props
}): JSX.Element => (
  <BoxCard
    className="box-card"
    css={css}
    gradientBg={gradientBg}
    toggle={props.toggle}
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
  </BoxCard>
);
