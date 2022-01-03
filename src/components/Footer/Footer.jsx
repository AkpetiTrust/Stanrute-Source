import React from "react";
import style from "./index.module.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
    </footer>
  );
}
