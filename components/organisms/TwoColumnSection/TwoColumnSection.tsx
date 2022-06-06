import { Box, Container, Text, Image } from "../../atoms";
import { CSS } from "../../../stitches.config";

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
        <Image
          css={{ "@sm": { display: "none" } }}
          src={image.basePath}
          alt="Obol Logo"
          objectFit="fill"
          width={387}
          height={317}
          layout="responsive"
        />

        <Image
          css={{ "@bp2": { display: "none" } }}
          src={image.mobilePath || image.basePath}
          alt="Obol Logo"
          width={248}
          height={203}
          layout="responsive"
        />
      </Box>
    </Box>
  );
};

export default TwoColumnSection;
