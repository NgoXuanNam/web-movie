import React from "react";
import styled from "styled-components";

export default function MovieRowFilms({ movies, title, isPosterShort }) {
  return (
    <MovieContent>
      <h1 className="heading">{title}</h1>
      <div className="wrapper">
        <MovieSlider>
          {movies.map((movie, index) => {
            return (
              <div key={index} className="movieItem">
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
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 0.8rem;
  padding: 3rem 0;
  transition: 0.25s linear;
  &:hover .movieItem {
    opacity: 0.5;
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
