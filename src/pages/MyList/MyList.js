import React, { useContext } from "react";
import styled from "styled-components";
import { MoviesList } from "~/components/Layout/DefaultLayout/DefaultLayout";
import MovieRowFilms from "../Home/Content/MovieRowFilms";

export default function MyList() {
  const { listMoviesMylist } = useContext(MoviesList);
  return (
    <MyListStyle>
      <div className="mylist">
        <MovieRowFilms
          movies={listMoviesMylist}
          title="Danh sách của tôi"
          isNetFlix={true}
        />
      </div>
    </MyListStyle>
  );
}

const MyListStyle = styled.div`
  background-color: var(--background-primary);
  padding-top: var(--header-height);
  .mylist {
    width: 90%;
    margin: 0 auto;
  }
`;
