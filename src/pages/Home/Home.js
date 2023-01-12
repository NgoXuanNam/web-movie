import React from "react";
import styled from "styled-components";
import Content from "./Content/Content";
// import DetailMovie from "./DetailMovie/DetailMovie";
import VideoIntro from "./VideoIntro/VideoIntro";
export default function Home() {
  return (
    <HomeStyle>
      <div className="home">
        <VideoIntro />
        <Content />
      </div>
    </HomeStyle>
  );
}

const HomeStyle = styled.div`
  .home {
    width: 100%;
    @media screen and (max-width: 739px) {
      margin-top: var(--header-height);
    }
  }
`;
