import { Box } from "../Box/Box";
import { Image } from "../Image/Image";

export const LogoCard = (props: {
  image: string;
  heading: string;
  logoCardLink?: string;
  width?: string;
  height?: string;
}) => {
  return (
    <Box
      as="a"
      className="logo-card"
      css={{
        width: "288px",
        height: "120px",
        maxWidth: "288px",
        maxHeight: "120px",
        borderRadius: "$4",
        backgroundColor: "$bg04",
        p: "$sm",
        "&:hover": { cursor: "pointer", backgroundColor: "$bg05" },
        "@sm": {
          width: "100%",
          height: "120px",
        },
        "@xs": {
          width: "auto",
          height: "60px",
        },
      }}
      target="_blank"
      href={props.logoCardLink}
    >
      <Box
        className="logo-card-container"
        css={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        <Image
          css={{ objectFit: "contain" }}
          src={props.image}
          alt={props.heading}
        />
      </Box>
    </Box>
  );
};
