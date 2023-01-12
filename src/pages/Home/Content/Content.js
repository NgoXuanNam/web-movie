import React, { useContext } from "react";
import { MoviesList } from "~/components/Layout/DefaultLayout/DefaultLayout";
import MovieRow from "./MovieRow";

export default function Content() {
  const {
    listMoviesOriginal,
    listMoviesFilmTH,
    listMoviesFilms,
    listMoviesPopular,
    listMoviesMylist,
  } = useContext(MoviesList);

  return (
    <div>
      <MovieRow
        movies={listMoviesOriginal}
        title="Movies Original"
        isNetFlix={true}
      />
      <MovieRow
        movies={listMoviesFilmTH}
        title="Phim Siêu anh hùng"
        isPosterShort={true}
      />
      <MovieRow movies={listMoviesFilms} title="Phim" isPosterShort={true} />
      <MovieRow
        movies={listMoviesPopular}
        title="Mới & Phổ biến"
        isPosterShort={true}
      />
      <MovieRow
        movies={listMoviesMylist}
        title="Danh sách của tôi"
        isPosterShort={true}
      />
    </div>
  );
}
