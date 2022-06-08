import { Box, Button, Text } from "../../atoms";
import { useState } from "react";
import { ObolDarkBgH, ObolDarkBgMark, MenuIcon, CloseIcon } from "../../icons";

import { useRouter } from "next/router";
import React from "react";

export const Navbar: React.FC<{ logoText?: string }> = ({
  children,
  logoText = "DV Launchpad",
}): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const router = useRouter();

  React.useEffect(() => {
    const handleRouteChange = () => {
      setIsMobileMenuOpen(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  const ContentMenu = () => (
    <Box
      className="navbar-content-menu"
      css={{
        display: "flex",
        flex: 1,
        gap: logoText ? "$lg" : "$2xl",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "$xxs",
        "@sm": {
          justifyContent: "center",
          flexDirection: "column",
        },
        "& a & button": {
          "@sm": {
            width: "$full",
            justifyContent: "center",
          },
        },
      }}
    >
      {children}
    </Box>
  );

  const LogoIcon = () => (
    <Box
      css={{
        display: "flex",
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        "@sm": {
          pl: "$sm",
        },
      }}
    >
      <Box
        css={{
          display: "flex",
          alignItems: "center",
          "@sm": { display: "none" },
        }}
      >
        <ObolDarkBgH />
        {logoText && (
          <Text
            css={{
              fontSize: "28px",
              color: "$muted",
              fontWeight: "bold",
              ml: "$xxs",
            }}
          >
            {logoText}
          </Text>
        )}
      </Box>
      <Box css={{ "@bp2": { display: "none" } }}>
        <ObolDarkBgMark />
      </Box>
    </Box>
  );

  const MenuButton = () => (
    <Button
      css={{ "@bp2": { display: "none" } }}
      ghost
      icon
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    >
      {!isMobileMenuOpen ? <MenuIcon /> : <CloseIcon color="white" />}
    </Button>
  );

  return (
    <Box
      css={{
        display: "flex",
        pt: "$xl",
        px: "calc($3xl * 2)",
        "@sm": {
          px: 0,
          flexDirection: "column",
          pt: "$xxs",
          pb: "$xxs",
        },
      }}
    >
      <Box
        css={{
          display: "flex",
          flex: 1,
          "@sm": {
            display: "none",
          },
        }}
      >
        <LogoIcon />
        <ContentMenu />
      </Box>
      <Box
        css={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          "@bp2": {
            display: "none",
          },
        }}
      >
        <Box css={{ display: "flex" }}>
          <LogoIcon />
          <MenuButton />
        </Box>
        <Box
          css={{
            display: isMobileMenuOpen ? "block" : "none",
            height: "auto",
            width: "$full",
          }}
        >
          <ContentMenu />
        </Box>
      </Box>
    </Box>
  );
};
