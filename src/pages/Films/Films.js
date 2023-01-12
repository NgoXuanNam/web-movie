import React, { useContext } from "react";
import styled from "styled-components";
import { MoviesList } from "~/components/Layout/DefaultLayout/DefaultLayout";
import MovieRowFilms from "../Home/Content/MovieRowFilms";

export default function Films() {
  const { listMoviesFilms } = useContext(MoviesList);
  return (
    <FilmsStyle>
      <div className="films">
        <div className="films_list">
          <MovieRowFilms
            movies={listMoviesFilms}
            title="Phim"
            isNetFlix={true}
          />
        </div>
      </div>
    </FilmsStyle>
  );
}

const FilmsStyle = styled.div`
  background-color: var(--background-primary);
  padding-top: var(--header-height);
  .films {
    width: 90%;
    margin: 0 auto;

    .films_list {
    }
  }
`;
