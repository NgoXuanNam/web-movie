import React, { useState } from "react";
import ReactPlayer from "react-player";
import { VscMute, VscUnmute } from "react-icons/vsc";
import styled from "styled-components";
export default function VideoIntro() {
  const [isMute, setIsMute] = useState(true);
  const [volume, setVolume] = useState(0);

  const handleMute = () => {
    setIsMute((prev) => !prev);
    setVolume(1);
  };

  const handleUnmute = () => {
    setIsMute((prev) => !prev);
    setVolume(0);
  };
  return (
    <VideoIntroStyle>
      <ReactPlayer
        playing={true}
        width="100%"
        height="100%"
        volume={volume}
        loop={true}
        url={"https://vimeo.com/295446657"}
        className="videoIntro"
      />
      <div className="InforIntro">
        <h1>Movies Elite</h1>
        <p>
          Movies Elite Chương trình truyền hình, phim không giới hạn và nhiều
          nội dung khác.
        </p>
      </div>
      {isMute ? (
        <VscMute className="videobtn" onClick={() => handleMute()} />
      ) : (
        <VscUnmute className="videobtn" onClick={() => handleUnmute()} />
      )}
    </VideoIntroStyle>
  );
}

const VideoIntroStyle = styled.div`
  position: relative;
  padding-top: 56%;
  .videoIntro {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  .InforIntro {
    position: absolute;
    top: 30%;
    left: 5%;
    width: 50rem;
    color: var(--color-white);
    @media screen and (max-width: 739px) {
      top: 25%;
      width: 80%;
    }
    h1 {
      font-size: 6rem;
      @media screen and (max-width: 739px) {
        font-size: 3rem;
      }
    }
    p {
      font-size: 3rem;
      @media screen and (max-width: 739px) {
        font-size: 1.7rem;
      }
    }
  }
  .videobtn {
    position: absolute;
    top: 60%;
    right: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.5rem;
    height: 3.5rem;
    color: var(--color-white);
    font-size: 3rem;
    border: 0.3rem solid var(--color-white);
    border-radius: 50%;
    padding: 0.8rem;
    text-align: center;
    transition: 0.25s ease;
    &:hover {
      background-color: rgba(34, 34, 34, 0.5);
      cursor: pointer;
      transform: scale(1.1);
    }
    @media screen and (max-width: 739px) {
      width: 1.8rem;
      height: 1.8rem;
    }
  }
`;
