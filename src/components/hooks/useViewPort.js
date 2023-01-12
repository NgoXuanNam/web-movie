import React, { useEffect, useState } from "react";

export default function useViewPort() {
  const [windowWitdh, setWindowWidth] = useState(0);
  useEffect(() => {
    window.addEventListener("resize", function () {
      const width = window.innerWidth;
      setWindowWidth(width);
    });
    return () => {
      window.addEventListener("resize", function () {
        const width = window.innerWidth;
        setWindowWidth(width);
      });
    };
  }, []);
  return [windowWitdh];
}
