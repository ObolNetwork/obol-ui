import { useState, useEffect } from "react";

import { mediaQueryKeys } from "../../../stitches.config";

type MediaQueryKeysType = (typeof mediaQueryKeys)[keyof typeof mediaQueryKeys];

export function useMediaQuery(query: MediaQueryKeysType) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
      const listener = () => {
        setMatches(media.matches);
      };
      media.addListener(listener);
      return () => media.removeListener(listener);
    }
  }, [matches, query]);

  return matches;
}

export const MediaQueryKeys = {
  xs: "(max-width: 520px)",
  sm: "(max-width: 900px)",
  md: "(max-width: 1200px)",
  lg: "(max-width: 1800px)",
} as const;
