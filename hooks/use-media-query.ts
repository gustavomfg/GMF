"use client";

import { useCallback, useSyncExternalStore } from "react";

/** Reports a media query after hydration; the server and first client render always see `false`. */
export function useMediaQuery(query: string) {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const media = window.matchMedia(query);
      media.addEventListener("change", onChange);
      return () => media.removeEventListener("change", onChange);
    },
    [query],
  );

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  );
}

/** Desktop pointer with room for scroll-driven scenes and no reduced-motion preference. */
export const CINEMATIC_QUERY = "(min-width: 1001px) and (prefers-reduced-motion: no-preference)";
