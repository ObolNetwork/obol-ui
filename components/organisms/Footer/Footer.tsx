import { Box, Link, Text } from "../../atoms";
import { ObolSolidDarkBgH } from "../../icons";

export interface FooterLinksProps {
  title: string;
  links: { title: string; link: string }[];
}

const defaultLinks: FooterLinksProps[] = [
  {
    title: "Docs",
    links: [
      { title: "Intro to Obol", link: "https://docs.obol.tech/docs/int/Overview" },
      { title: "Charon", link: "https://github.com/ObolNetwork/charon" },
      { title: "DV Launchpad", link: "https://docs.obol.tech/docs/dvk/distributed_validator_launchpad" },
    ],
  },
  {
    title: "Community",
    links: [
      { title: "Discord", link: "https://discord.com/invite/n6ebKsX46w" },
      { title: "Twitter", link: "https://twitter.com/ObolNetwork" },
    ],
  },
  {
    title: "More",
    links: [
      { title: "Blog", link: "https://blog.obol.tech" },
      { title: "Github", link: "https://github.com/ObolNetwork" },
    ],
  },
];

export const Footer: React.FC<{ links?: FooterLinksProps[] }> = ({
  links = defaultLinks,
}) => (
  <Box
    css={{
      display: "flex",
      "@sm": {
        flexDirection: "column",
        gap: "$xl",
      },
    }}
  >
    <Box
      css={{
        display: "flex",
        flexDirection: "column",
        gap: "$xxs",
        flex: 1,
      }}
    >
      <ObolSolidDarkBgH />
      <Text variant="body" css={{ fontSize: "$3" }}>
        Copyright © 2022 Obol Labs, Inc.
      </Text>
    </Box>
    <Box
      className="footer-obol"
      css={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        "@sm": {
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "$xl",
        },
        flex: 2,
      }}
    >
      {links.map((item, index) => (
        <Box
          key={`link-section-${index}`}
          css={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <Text variant="body" css={{ fontSize: "$5", fontWeight: "$bold" }}>
            {item.title}
          </Text>
          {item.links.map((link, idx) => (
            <Link
              key={`link-${idx}`}
              variant="docs"
              target="_blank"
              href={link.link}
              css={{ color: "$textLight", fontSize: "$4" }}
            >
              {link.title}
            </Link>
          ))}
        </Box>
      ))}
    </Box>
  </Box>
);
