import React from "react";
import styled from "styled-components";
import useScrollY from "~/components/hooks/useScrollY";
import Navbar from "./Navbar";

export default function Header() {
  const [scrollY] = useScrollY();

  return (
    <HeaderStyle
      className="header"
      style={
        scrollY < 50
          ? { backgroundColor: "transparent" }
          : { backgroundColor: "var(--color-black)" }
      }
    >
      <Navbar />
    </HeaderStyle>
  );
}
const HeaderStyle = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  z-index: 100;
  @media screen and (max-width: 739px) {
    background-color: var(--color-black) !important;
  }
`;
