import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
    }

    html{
        font-size: 62.5%;
        font-family: 'Khand', sans-serif;
        transition: all 0.5s ease;
        scroll-behavior: smooth;

    }

    body{
        --background-primary: rgb(34, 34, 34);
        --color-black: #000;
        --color-red: #e50914;
        --color-white: #fff;
        --color-blue: #0000ff;
        --header-height: 8rem;
        --footer-height: 6rem;

    }

    .hidden{
      display: none;
    }


`;
