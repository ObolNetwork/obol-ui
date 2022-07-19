import { Box, Text, Image } from "../../atoms";
import { mediaQueryKeys, CSS } from "../../../stitches.config";
import { useMediaQuery } from "../../utils/hooks";

export interface HeroSectionProps {
  heading: string;
  content: JSX.Element | string;
  children?: React.ReactNode;
  image?: { basePath: string; mobilePath?: string };
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
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "@sm": { flexDirection: "column" },
        width: "$full",
        ...props?.css,
      }}
    >
      <Box
        css={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          "@sm": { alignItems: "initial" },
          gap: "$xl",
        }}
      >
        <Box
          css={{
            display: "flex",
            gap: "1rem",
            flexDirection: "column",
            justifyContent: "flex-start",

            "@sm": {
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "$2xl",
            },
          }}
        >
          <Text
            id="heading-text"
            css={{
              fontWeight: "$bold",
              lineHeight: "calc($xl * 2)",
              fontSize: "calc($10 + $3)",
              "@sm": {
                textAlign: "center",
                fontSize: "$10",
              },
            }}
            color="textLight"
          >
            {props.heading}
          </Text>
          {screenDownSm && (
            <Box
              css={{
                flex: 1,
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Image
                src={image?.basePath || MOBILE_PATH}
                alt="Obol Logo"
                width={343}
                height={226}
              />
            </Box>
          )}
          <Text
            css={{
              width: "80%",
              lineHeight: "$xl",
              "@sm": {
                textAlign: "center",
                width: "auto",
              },
            }}
            size={{ "@initial": "7", "@sm": "5" }}
            color="textMiddle"
          >
            {props.content}
          </Text>
        </Box>

        {props.children}
      </Box>
      {!screenDownSm && (
        <Box
          css={{
            flex: 1,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Image
            src={image?.basePath || BASE_PATH}
            alt="Obol Logo"
            width={912}
            height={597}
          />
        </Box>
      )}
    </Box>
  );
};

export default HeroSection;
