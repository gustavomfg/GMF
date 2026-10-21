"use client";

import GradualBlur from "@/components/react-bits/GradualBlur";

/** Softens content as it leaves through the bottom of the viewport; hides itself at the end of the page. */
export function PageEdgeBlur() {
  return (
    <GradualBlur
      className="page-edge-blur"
      target="page"
      position="bottom"
      height="4rem"
      strength={1.1}
      layers={5}
      curve="bezier"
      opacity={1}
      autoHide
      zIndex={30}
    />
  );
}
