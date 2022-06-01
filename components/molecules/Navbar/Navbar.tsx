import { Box, Button } from "../../atoms";
import { useState } from "react";
import { useMediaQuery, MediaQueryKeys } from "../../utils/hooks";
import { ObolDarkBgH, ObolDarkBgMark, MenuIcon, CloseIcon } from "../../icons";

import { useRouter } from "next/router";
import React from "react";

export const Navbar: React.FC = ({ children }): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const screenDownSm = useMediaQuery(MediaQueryKeys.sm);

  const router = useRouter();

  const handleOnCloseMobileMenu = () => setIsMobileMenuOpen(false);

  React.useEffect(() => {
    if (router.events) {
      router.events.on("routeChangeStart", () => {
        handleOnCloseMobileMenu();
      });

      router.events.on("routeChangeComplete", () => {
        handleOnCloseMobileMenu();
      });

      return () => {
        router.events.off("routeChangeStart", () => {
          handleOnCloseMobileMenu();
        });

        router.events.off("routeChangeComplete", () => {
          handleOnCloseMobileMenu();
        });
      };
    }
  }, [router.events]);

  const ContentMenu = () => (
    <Box
      css={{
        display: "flex",
        flex: 1,
        gap: "$2xl",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "$xxs",
        "@sm": {
          justifyContent: "center",
          flexDirection: "column",
        },
        "& a": {
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
      {!screenDownSm ? <ObolDarkBgH /> : <ObolDarkBgMark />}
    </Box>
  );

  const MenuButton = () => (
    <Button ghost icon onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
      {!isMobileMenuOpen ? <MenuIcon /> : <CloseIcon color="white" />}
    </Button>
  );

  const MobileView = () => (
    <Box
      css={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
      }}
    >
      <Box css={{ display: "flex" }}>
        <LogoIcon />
        <MenuButton />
      </Box>
      {isMobileMenuOpen && (
        <Box
          css={{
            mt: "50px",
            height: "auto",
            width: "$full",
            display: "flex",
          }}
        >
          <ContentMenu />
        </Box>
      )}
    </Box>
  );

  const DesktopView = () => (
    <>
      <LogoIcon />
      <ContentMenu />
    </>
  );

  return (
    <Box
      css={{
        display: "flex",
        pt: "$xl",
        px: "calc($3xl * 2)",
        "@sm": {
          px: 0,
          pt: "$xxs",
          pb: "$xxs",
        },
      }}
    >
      {screenDownSm ? <MobileView /> : <DesktopView />}
    </Box>
  );
};
