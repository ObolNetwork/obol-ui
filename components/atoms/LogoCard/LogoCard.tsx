import { Box } from "../Box/Box";
import Image from "next/image";
import { useMediaQuery, MediaQueryKeys } from "../../utils/hooks";

export const LogoCard = (props: {
  image: string;
  heading: string;
  width?: string;
  height?: string;
}) => {
  const screenDownSm = useMediaQuery(MediaQueryKeys.sm);
  return (
    <Box
      className="logo-card"
      css={{
        position: "relative",
        width: "288px",
        height: "120px",
        borderRadius: "$4",
        backgroundColor: "$bg04",
        p: "$sm",
        "@sm": {
          width: "42%",
          height: "auto",
          p: "$xxs",
        },
      }}
    >
      {!screenDownSm ? (
        <Image
          priority
          src={props.image}
          layout="fill"
          objectFit="scale-down"
          alt={props.heading}
        />
      ) : (
        <Image
          priority
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
