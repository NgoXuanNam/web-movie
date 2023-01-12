import React, { useContext } from "react";
import styled from "styled-components";
import { MoviesList } from "~/components/Layout/DefaultLayout/DefaultLayout";
import MovieRowFilms from "../Home/Content/MovieRowFilms";

export default function Popular() {
  const { listMoviesPopular } = useContext(MoviesList);
  return (
    <PopularStyle>
      <div className="popular_list">
        <MovieRowFilms
          movies={listMoviesPopular}
          title="Phim Mới & Phổ biến"
          isNetFlix={true}
        />
      </div>
    </PopularStyle>
  );
}
const PopularStyle = styled.div`
  background-color: var(--background-primary);
  padding-top: var(--header-height);
  .popular_list {
    width: 90%;
    margin: 0 auto;
  }
`;
