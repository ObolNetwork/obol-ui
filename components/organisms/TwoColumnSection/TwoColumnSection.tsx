import { Box, Container, Text, Image } from "../../atoms";
import { mediaQueryKeys, CSS } from "../../../stitches.config";
import { useMediaQuery } from "../../utils/hooks";

export interface TwoColumnSectionProps {
  heading: JSX.Element | string;
  content: JSX.Element | string;
  image: { basePath: string; mobilePath?: string };
  children?: React.ReactNode;
  preHeading?: JSX.Element | string;
  css?: CSS;
}

export const TwoColumnSection: React.FC<TwoColumnSectionProps> = ({
  image,
  ...props
}): JSX.Element => {
  const screenDownSm = useMediaQuery(mediaQueryKeys.sm);

  return (
    <Box
      className="box-two-column-section"
      css={{
        width: "$full",
        display: "grid",
        gridAutoColumns: "1fr",
        gridAutoFlow: "column",
        backgroundColor: "$bg03",
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
            src={image.basePath}
            width="100%"
            height="100%"
            alt="Obol Logo"
          />
        ) : (
          <Image
            src={image.mobilePath || image.basePath}
            width="100%"
            height="100%"
            alt="Obol Logo"
          />
        )}
      </Box>
    </Box>
  );
};

export default TwoColumnSection;
