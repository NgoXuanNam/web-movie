import React from "react";
import { MdSearch } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import styled from "styled-components";

import logo from "~/assets/image/logo.png";
export default function Navbar() {
  return (
    <Navigation className="navbar">
      <div className="navbar__wrapper">
        <input
          type="checkbox"
          name=""
          className="navbar__input "
          id="navbar-menu-icon"
        />
        <label htmlFor="navbar-menu-icon" className="overlay"></label>
        <Link to="/" className="navbar__logo">
          <img src={logo} alt="logo" />
        </Link>

        <ul className="navbar__menu-list">
          <li className="navbar__menu-item">
            <Link to="/">Trang chủ</Link>
          </li>
          <li className="navbar__menu-item">
            <Link to="/phim-sieu-anh-hung">Siêu anh hùng</Link>
          </li>
          <li className="navbar__menu-item">
            <Link to="/phim">Phim</Link>
          </li>
          <li className="navbar__menu-item">
            <Link to="/phim-moi-pho-bien">Mới & Phổ biến</Link>
          </li>
          <li className="navbar__menu-item">
            <Link to="/danh-sach-cua-toi">Danh sách của tôi</Link>
          </li>
          <label htmlFor="navbar-menu-icon" className="navbar-menu-icon-close">
            <IoClose />
          </label>
        </ul>
      </div>
      <div className="navbar__button">
        <input
          className="navbar__input-search"
          type="text"
          placeholder="Tìm kiếm..."
        />
        <MdSearch className="navbar__button-search" />
        <Link to={"/dang-ky"} className="navbar__button-login">
          Tài khoản
        </Link>

        <label htmlFor="navbar-menu-icon">
          <GiHamburgerMenu className="navbar__button-menu" />
        </label>
      </div>
    </Navigation>
  );
}

const Navigation = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8rem;
  width: 90%;
  margin: 0 auto;
  .navbar__wrapper {
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    width: 100%;
    height: 100%;
    @media screen and (max-width: 739px) {
    }
  }
  .navbar__logo {
    width: 18rem;
    cursor: pointer;
    img {
      width: 100%;
    }
    @media screen and (max-width: 739px) {
      width: 15rem;
    }
    @media screen and (min-width: 740px) and (max-width: 1024px) {
      width: 15rem;
    }
  }
  .overlay {
    position: absolute;
    top: 0;
    right: 0;
    left: -12%;
    bottom: 0;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.35);
    display: none;
    @media screen and (max-width: 739px) {
      /* display: block; */
    }
  }
  .navbar__input {
    display: none;
    @media screen and (max-width: 739px) {
      :checked ~ .navbar__menu-list {
        transform: translateX(20%);
        animation: fadeIn 0.35s linear;
      }

      :checked ~ .overlay {
        display: block;
      }
      @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    }
  }
  .navbar__menu-list {
    list-style: none;
    margin-left: 2rem;

    @media screen and (max-width: 739px) {
      position: absolute;
      top: 0;
      right: 0;
      background-color: #222;
      width: 100%;
      height: 100vh;
      padding-top: 6rem;
      margin-left: 0;
      transform: translateX(105.5%);
      transition: 0.35s linear;
      z-index: 100;
      .navbar__menu-item {
        line-height: 2.6;
        padding-left: 2rem !important;
      }
    }
    .navbar-menu-icon-close {
      display: none;
      font-size: 4rem;
      color: var(--color-white);
      @media screen and (max-width: 739px) {
        display: block;
        position: relative;
        top: -53%;
        right: -68%;
        &:hover {
          cursor: pointer;
          opacity: 0.7;
        }
      }
    }
    .navbar__menu-item {
      display: inline;
      padding: 0.5rem 1rem;
      transition: 0.25s ease;
      @media screen and (max-width: 739px) {
        display: block;
      }

      &:hover {
        opacity: 0.7;
        cursor: pointer;
      }
      a {
        text-decoration: none;
        color: #fff;
        font-size: 2rem;
        @media screen and (min-width: 740px) and (max-width: 1024px) {
          font-size: 1.3rem;
        }
      }
    }
  }

  .navbar__button {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .navbar__input-search {
      height: 3rem;
      width: 0;
      border: 0.1rem solid #fff;
      outline: none;
      background-color: #222;
      color: var(--color-white);
      padding: 0 1.2rem;
      font-size: 1.4rem;
      border-radius: 1rem;
      transform: translateX(3.6rem);
      opacity: 0;
      z-index: 100;
      transition: 0.5s ease;
      cursor: pointer;
      &:focus {
        cursor: text;
        transform: translateX(0);
        opacity: 1;
        width: 30rem;
      }
      @media screen and (max-width: 739px) {
        &:focus {
          width: 8rem;
        }
      }
      @media screen and (min-width: 740px) and (max-width: 1024px) {
        position: fixed;
        top: 2%;
        right: 21%;
        &:focus {
          top: 5%;
          right: 15%;
        }
      }
    }

    &.hidden {
      display: none;
    }
    .navbar__button-search {
      font-size: 2.8rem;
      color: var(--color-white);
      padding: 0 1rem;
      cursor: pointer;
    }

    .navbar__button-login {
      background-color: var(--color-red);
      color: var(--color-white);
      font-size: 1.6rem;
      font-weight: 600;
      padding: 0.5rem 1rem;
      text-align: center;
      text-decoration: none;
      border-radius: 1rem;
      white-space: nowrap;
      border: none;
      transition: 0.25s linear;
      &:hover {
        cursor: pointer;
        background-color: red;
      }
      @media screen and (max-width: 739px) {
        display: none;
      }
      @media screen and (min-width: 740px) and (max-width: 1024px) {
        font-size: 1.4rem;
      }
    }
    .navbar__button-menu {
      font-size: 3rem;
      color: var(--color-white);
      display: none;
      @media screen and (max-width: 739px) {
        display: block;
      }
    }
  }
`;
