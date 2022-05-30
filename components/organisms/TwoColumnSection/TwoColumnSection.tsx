import { Box, Container, Text } from "../../atoms";
import { mediaQueryKeys, CSS } from "../../../stitches.config";
import Image from "next/image";
import { useMediaQuery } from "../../utils/hooks";

export interface HeroSectionProps {
  heading: JSX.Element | string;
  content: JSX.Element | string;
  image: { basePath: string; mobilePath?: string };
  children?: React.ReactNode;
  preHeading?: JSX.Element | string;
  css?: CSS;
}

const BASE_PATH = "/assets/hexapod.svg";
const MOBILE_PATH = "/assets/hexapod-mobile.svg";

export const HeroSection: React.FC<HeroSectionProps> = ({
  image,
  ...props
}): JSX.Element => {
  const screenDownSm = useMediaQuery(mediaQueryKeys.sm);

  return (
    <Box
      css={{
        width: "$full",
        display: "grid",
        gridAutoColumns: "1fr",
        gridAutoFlow: "column",
        "@sm": {
          display: "grid",
          gridTemplateColumns: "1fr",
          gridAutoColumns: "unset",
          gridAutoFlow: "unset",
        },
        minHeight: 645,
        ...props.css,
      }}
    >
      <Container ghost alignItems="start" className="column1">
        <Box
          css={{
            display: "flex",
            gap: "1rem",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          {props.preHeading && props.preHeading}
          <Text id="heading-text" variant="h2">
            {props.heading}
          </Text>
          <Text variant="body" css={{ fontSize: "$5" }}>
            {props.content}
          </Text>
        </Box>
        {props.children && props.children}
      </Container>
      <Box
        className="column2"
        css={{
          flex: 1,
          position: "relative",
          m: "8rem",
          "@sm": {
            m: "0",
            mt: "12px",
            height: "242px",
          },
          "@md": {
            m: "0",
          },
        }}
      >
        {!screenDownSm ? (
          <Image
            src={image.basePath || BASE_PATH}
            alt="Obol Logo"
            objectFit="fill"
            layout="fill"
          />
        ) : (
          <Image
            src={image.basePath || MOBILE_PATH}
            alt="Obol Logo"
            objectFit="fill"
            layout="fill"
          />
        )}
      </Box>
    </Box>
  );
};

export default HeroSection;
