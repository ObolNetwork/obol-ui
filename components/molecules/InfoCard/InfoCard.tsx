import { Box, Text } from "../../atoms";
import Image, { ImageProps } from "next/image";

export interface InfoCardProps {
  image: ImageProps;
  heading: string;
  subheading: string;
  children?: React.ReactNode;
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
      <Box className="svg-shadow">
        <Image className="block-image" {...props.image} alt={props.heading} />
      </Box>
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
        <Text
          css={{ lineHeight: "$base", color: "#9CC2C9", mb: "$xl" }}
          size="4"
        >
          {props.subheading}
        </Text>
      </Box>
      {props.children}
    </Box>
  );
};