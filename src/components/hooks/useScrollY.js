import { useEffect, useState } from "react";

export default function useScrollY() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setScrollY(scrollY);
    });
    return () => {
      window.removeEventListener("scroll", function () {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        setScrollY(scrollY);
      });
    };
  }, []);
  return [scrollY];
}
