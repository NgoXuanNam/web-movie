import React, { createContext, useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
export const MoviesList = createContext();

export default function DefaultLayout({ children }) {
  const [listMoviesOriginal, setListMoviesOriginal] = useState([]);
  const [listMoviesFilmTH, setListMoviesFilmTH] = useState([]);
  const [listMoviesFilms, setListMoviesFilms] = useState([]);
  const [listMoviesPopular, setListMoviesPopular] = useState([]);
  const [listMoviesMylist, setListMoviesMylist] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/all/day?api_key=fbaa4d160976ab0e5e5d5b77ddb20b91"
    )
      .then((res) => res.json())
      .then((moviess) => {
        setListMoviesOriginal(moviess.results);
      });
  }, []);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/list/1?api_key=fbaa4d160976ab0e5e5d5b77ddb20b91&language=en-US"
    )
      .then((res) => res.json())
      .then((moviess) => {
        setListMoviesFilmTH(moviess.items);
      });
  }, []);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/list/2?api_key=fbaa4d160976ab0e5e5d5b77ddb20b91&language=en-US"
    )
      .then((res) => res.json())
      .then((moviess) => {
        setListMoviesFilms(moviess.items);
      });
  }, []);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/list/3?api_key=fbaa4d160976ab0e5e5d5b77ddb20b91&language=en-US"
    )
      .then((res) => res.json())
      .then((moviess) => {
        setListMoviesPopular(moviess.items);
      });
  }, []);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/list/4?api_key=fbaa4d160976ab0e5e5d5b77ddb20b91&language=en-US"
    )
      .then((res) => res.json())
      .then((moviess) => {
        setListMoviesMylist(moviess.items);
      });
  }, []);
  return (
    <div className="defaultlayout">
      <Header />
      <MoviesList.Provider
        value={{
          listMoviesOriginal,
          listMoviesFilmTH,
          listMoviesFilms,
          listMoviesPopular,
          listMoviesMylist,
        }}
      >
        <div className="container">{children}</div>
      </MoviesList.Provider>
      <Footer />
    </div>
  );
}
