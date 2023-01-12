import React, { useContext } from "react";
import styled from "styled-components";
import { MoviesList } from "~/components/Layout/DefaultLayout/DefaultLayout";
import MovieRowFilms from "../Home/Content/MovieRowFilms";

export default function FilmTH() {
  const { listMoviesFilmTH } = useContext(MoviesList);
  return (
    <FilmTHStyle>
      <div className="filmTH">
        <div className="filmTH_list">
          <MovieRowFilms
            movies={listMoviesFilmTH}
            title="Phim Siêu anh hùng"
            isNetFlix={true}
          />
        </div>
      </div>
    </FilmTHStyle>
  );
}

const FilmTHStyle = styled.div`
  background-color: var(--background-primary);
  padding-top: var(--header-height);
  .filmTH {
    width: 90%;
    margin: 0 auto;

    .filmTH_list {
    }
  }
`;
