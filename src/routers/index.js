import Home from "~/pages/Home/Home";
import FilmTH from "~/pages/FilmTH/FilmTH";
import Films from "~/pages/Films/Films";
import Popular from "~/pages/Popular/Popular";
import MyList from "~/pages/MyList/MyList";
import SignUp from "~/pages/Login/SignUp";
import Login from "~/pages/Login/Login";
// import React from "react";

// const Home = React.lazy(() => import("~/pages/Home/Home"));
// const FilmTH = React.lazy(() => import("~/pages/FilmTH/FilmTH"));
// const Films = React.lazy(() => import("~/pages/Films/Films"));
// const Popular = React.lazy(() => import("~/pages/Popular/Popular"));
// const MyList = React.lazy(() => import("~/pages/MyList/MyList"));
// const Login = React.lazy(() => import("~/pages/Login/Login"));

// Public routes

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/phim-sieu-anh-hung", component: FilmTH },
  { path: "/phim", component: Films },
  { path: "/phim-moi-pho-bien", component: Popular },
  { path: "/danh-sach-cua-toi", component: MyList },
  { path: "/dang-ky", component: SignUp },
  { path: "/dang-nhap", component: Login },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
