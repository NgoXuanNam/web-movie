import React, { useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import styled from "styled-components";

export default function MovieRow({
  movies,
  title,
  isNetFlix,
  isPosterShort,
  isDescription,
}) {
  const movieSlider = useRef();
  const movieItem = useRef();

  let index = 0;
  const handleArrowRight = () => {
    index++;
    const widthItem = movieItem.current.offsetWidth;
    if (index > movies.length - 5) {
      index = 0;
    }
    movieSlider.current.style = `transform: translateX(-${
      (widthItem + 8) * index
    }px)`;
  };

  const handleArrowLeft = () => {
    index--;
    const widthItem = movieItem.current.offsetWidth;
    if (index < 0) {
      index = 0;
    }
    movieSlider.current.style = `transform: translateX(-${
      (widthItem + 8) * index
    }px)`;
  };

  return (
    <MovieContent>
      <MdKeyboardArrowLeft
        className={`arrowLeft ${isNetFlix && "isNetFlix"}`}
        onClick={handleArrowLeft}
      />
      <h1 className="heading">{title}</h1>
      <div className="wrapper">
        <MovieSlider
          ref={movieSlider}
          // style={{ gridTemplateColumns: `repeat(${movies.length}, 30rem)` }}
        >
          {movies.map((movie) => {
            return (
              <div key={movie.id} className="movieItem" ref={movieItem}>
                {isDescription && (
                  <DetailMoviesStyle>
                    {
                      <div className="detailmovies_wrapper">
                        <div className="detailmovies" key={movie.id}>
                          <h1>The movies</h1>
                          <h2>{movie.title || movie.name}</h2>
                          <h2>OverView</h2>
                          <p>{movie.overview}</p>
                        </div>
                      </div>
                    }
                  </DetailMoviesStyle>
                )}
                <img
                  src={
                    !isPosterShort
                      ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                      : `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
                  }
                  alt="film_item"
                />
                <div className="movieName">{movie.title || movie.name}</div>
              </div>
            );
          })}
        </MovieSlider>
      </div>
      <MdKeyboardArrowRight
        className={`arrowRight ${isNetFlix && "isNetFlix"}`}
        onClick={handleArrowRight}
      />
    </MovieContent>
  );
}

const MovieContent = styled.div`
  background-color: var(--background-primary);
  color: var(--color-white);
  box-sizing: border-box;
  padding: 2rem 2rem 0;
  position: relative;
  width: 100%;
  height: 100%;

  .arrowLeft,
  .arrowRight {
    position: absolute;
    top: 50%;
    z-index: 20;
    font-size: 4rem;
    padding: 0.8rem 0.5rem;
    background-color: rgba(34, 34, 34, 0.5);
    border-radius: 1rem;
    transition: 0.25s linear;
    &:hover {
      transform: scale(1.05);
      background-color: rgba(34, 34, 34, 0.7);
      cursor: pointer;
    }
    &.isNetFlix {
      padding: 2rem 0.5rem;
    }
  }
  .arrowLeft {
    left: 2%;
    text-align: center;
  }
  .arrowRight {
    right: 2%;
  }
  .heading {
    font-size: 3rem;
    user-select: none;
  }
  .wrapper {
    overflow-y: hidden;
    overflow-x: auto;
    scroll-behavior: smooth;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

const MovieSlider = styled.div`
  display: grid;
  grid-template-columns: repeat(80, 30rem);
  gap: 0.8rem;
  padding: 3rem 0;
  transition: 0.25s linear;
  &:hover .movieItem {
    opacity: 0.5;
  }
  @media screen and (max-width: 739px) {
    grid-template-columns: repeat(80, minmax(33rem, 1fr));
  }
  @media screen and (min-width: 740px) and (max-width: 1024px) {
    grid-template-columns: repeat(80, minmax(33rem, 1fr));
  }

  .movieItem {
    position: relative;
    width: 100%;
    height: 100%;
    user-select: none;
    border-radius: 1rem;
    transition: 0.25s linear;

    &:hover {
      transform: scale(1.1);
      opacity: 1;
      z-index: 10;
    }
    &:hover .detailmovies_wrapper {
      display: block;
      border-radius: 1rem;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 1rem;
    }
    .movieName {
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 100%;
      text-align: center;
      transform: translateX(-50%);
      font-size: 2rem;
      background-color: rgba(34, 34, 34, 0.8);
      border-radius: 0 0 1rem 1rem;
      transition: 0.25s ease;
      &:hover {
        cursor: pointer;
        background-color: rgba(34, 34, 34, 1);
      }
    }
  }
`;

const DetailMoviesStyle = styled.div`
  .detailmovies_wrapper {
    position: absolute;
    top: 0%;
    left: 0%;
    right: 0%;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    display: none;

    .detailmovies {
      width: 100%;
      box-sizing: border-box;
      padding: 1rem 2rem;
      text-align: justify;

      @media screen and (min-width: 740px) and (max-width: 1024px) {
        height: 30rem;
      }
      @media screen and (max-width: 739px) {
        height: 100%;
      }
      h1 {
        text-align: center;
        font-size: 3rem;
      }
      h2 {
        font-size: 2.2rem;
      }
      p {
        font-size: 2rem;
      }
      img {
        width: 100%;
      }
      .detailmovies-close {
        position: absolute;
        top: -10%;
        right: 5rem;
        font-size: 3.5rem;
        @media screen and (max-width: 739px) {
          top: -5%;
          right: 1rem;
        }
      }
    }
  }
`;
