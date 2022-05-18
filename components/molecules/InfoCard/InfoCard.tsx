import { styled } from "../../../stitches.config";
import { Box, Text, Link } from "../../atoms";
import { ArrowForward } from "../../icons";

export interface InfoCardProps {
  heading: string;
  icon: JSX.Element;
  link?: string;
  subheading?: string;
}

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


export const InfoCard: React.FC<InfoCardProps> = (props): JSX.Element => {
  return (
    <Box
      css={{
        display: "flex",
        p: "$xl",
        gap: "$xl",
        flexDirection: "column",
        alignItems: "center",
        background: "$bg03",
        borderRadius: "$4",
        width: "30%",
        "@sm": {
          width: "auto",
        },
      }}
    >
      <GlowIconBox>{props.icon}</GlowIconBox>
      <Box
        css={{
          display: "flex",
          gap: "$xs",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
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
      </Box>
      {props.link && (
        <Link href={props.link}>
          Learn More <ArrowForward />
        </Link>
      )}
    </Box>
  );
};
