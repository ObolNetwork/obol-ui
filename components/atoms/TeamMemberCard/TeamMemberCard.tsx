import { Image } from "../Image/Image";
import { Box } from "../Box/Box";
import Text from "../Text/Text";
import { GithubIcon, TwitterIcon } from "../../icons";
import { Link } from "../Link/Link";
import { EcosystemCardProps } from "../../utils/types";

export const TeamMemberCard: React.FC<EcosystemCardProps> = (props) => (
  <Box
    className="team-member-card"
    css={{
      display: "grid",
      gridTemplateColumns: "1fr",
      borderRadius: "$3",
      backgroundColor: "$bg04",
      width: "288px",
      gap: "$lg",
      py: "$xl",
      "@sm": { gridTemplateColumns: "1fr 2fr", p: "$sm", height: "116px" },
    }}
  >
    <Box
      css={{
        $$size: "160px",
        width: "$$size",
        height: "$$size",
        placeSelf: "center",
        "@sm": { $$size: "100px" },
        "&::after": {
          position: "absolute",
          marginTop: "-160px",
          borderRadius: "$round",
          display: "block",
          content: "",
          width: "$$size",
          height: "$$size",
          background: "hsla(161, 77%, 54%, 0.2)",
          "@sm": {
            marginTop: "-100px",
          },
        },
      }}
    >
      <Image
        placeholder="blur"
        alt={props.heading}
        css={{ borderRadius: "$round" }}
        src={props.image}
        width={160}
        height={160}
      />
    </Box>
    <Box
      css={{
        display: "grid",
        width: "$full",
        justifyContent: "center",
        "@sm": {
          justifyContent: "start",
          gridTemplateRows: "3fr 1fr",
          width: "160px",
        },
        gap: "$sm",
      }}
    >
      <Box
        css={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "$full",
          "@sm": {
            alignItems: "start",
          },
        }}
      >
        <Text
          variant={props.heading.length > 14 ? "lh5" : "h5"}
          css={{
            whiteSpace: "nowrap",
            width: "160px",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {props.heading}
        </Text>
        {props.subheading && <Text variant="body">{props.subheading}</Text>}
      </Box>
      {props.links && (
        <Box
          css={{
            display: "flex",
            justifyContent: "center",
            width: "$full",
            "@sm": {
              justifyContent: "start",
            },
            gap: "14px",
          }}
        >
          {props.links.map((item) => (
            <Link
              key={`icon-${item.network}`}
              variant="docs"
              target="_blank"
              href={item.link}
            >
              {item.network === "twitter" ? <TwitterIcon /> : <GithubIcon />}
            </Link>
          ))}{" "}
        </Box>
      )}
    </Box>
  </Box>
);
