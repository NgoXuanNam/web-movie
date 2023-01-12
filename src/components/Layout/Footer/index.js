import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterStyle>
      <p>
        Built and Designed by{" "}
        <a href="https://www.facebook.com/ngoxuannam.vn/">Ngo Xuan Nam</a>
      </p>
    </FooterStyle>
  );
}

const FooterStyle = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--footer-height);
  width: 100%;
  background-color: var(--color-black);
  color: var(--color-white);
  font-size: 2rem;
  border-top: 0.1rem solid var(--color-white);
  a {
    color: blue;
    text-decoration: none;
  }
`;
