import { Box } from "../Box/Box";
import Image from "next/image";
import { useMediaQuery, MediaQueryKeys } from "../../utils/hooks";

export const LogoCard = (props: {
  image: string;
  heading: string;
  logoCardLink?: string;
  width?: string;
  height?: string;
}) => {
  const screenDownSm = useMediaQuery(MediaQueryKeys.sm);
  return (
    <Box
      as="a"
      className="logo-card"
      css={{
        position: "relative",
        width: "288px",
        height: "120px",
        borderRadius: "$4",
        backgroundColor: "$bg04",
        "&:hover": { cursor: "pointer", backgroundColor: "$bg05" },
        p: "$sm",
        "@sm": {
          width: "42%",
          height: "auto",
          p: "$xxs",
        },
      }}
      target="_blank"
      href={props.logoCardLink}
    >
      {!screenDownSm ? (
        <Image
          src={props.image}
          layout="fill"
          objectFit="scale-down"
          alt={props.heading}
        />
      ) : (
        <Image
          src={props.image}
          layout="responsive"
          objectFit="fill"
          width={props.width}
          height={props.height}
          alt={props.heading}
        />
      )}
    </Box>
  );
};
