import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import logo from "../images/header__logo.svg";

function Header({ email, onSignOut }) {

  return (
    <header className="header">
      <img src={logo} alt="Логотип проекта Место" className="header__logo" />
      <Routes>
        <Route
          path="/sign-in"
          element={<Link to="/sign-up" className="header__link">Регистрация</Link>}
        />

        <Route
          path="/sign-up"
          element={<Link to="sign-in" className="header__link">Вход</Link>}
        />

        <Route
          path="/"
          element={
            <div className="header__box">
              <p className="header__email">{email}</p>
              <Link to="sign-in" onClick={onSignOut} className="header__link header__link_signout">Выйти</Link>
            </div>
          }
        />
      </Routes>
    </header>
  );
}

export default Header;