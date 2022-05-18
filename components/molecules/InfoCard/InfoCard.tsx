import { Box, Text, GlowIconBox, Link } from "../../atoms";
import { ArrowForward } from "../../icons";

export interface InfoCardProps {
  heading: string;
  icon: JSX.Element;
  link?: string;
  subheading?: string;
}

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
          <Text css={{ lineHeight: "$base", color: "#9CC2C9" }} size="4">
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
