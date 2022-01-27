import React from "react";
import style from "./index.module.css";
import logo from "./logo.png";
import facebook from "./facebook-f.svg";
import instagram from "./instagram.svg";
import twitter from "./twitter.svg";
import whatsapp from "./whatsapp.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>

      <div className={`${style.links} grid`}>
        <div className={style.col_1}>
          <p className={style.column_heading}>Company</p>
          <Link to="/careers">Career</Link>
          <Link to="/academy">Academy</Link>
          <Link to="/contact">Contact us</Link>
        </div>
        <div className={style.col_2}>
          <p className={style.column_heading}>Legal</p>
          <a href="/">Terms of Services</a>
          <a href="/">Privacy Policy</a>
        </div>
        <div className={style.col_3}>13 Dieke Avenue, Delta State.</div>
      </div>

      <div className={style.social_icons}>
        <a href="/">
          <img src={whatsapp} alt="whatsapp" />
        </a>
        <a href="/">
          <img src={instagram} alt="instagram" />
        </a>
        <a href="/">
          <img src={twitter} alt="twitter" />
        </a>
        <a href="/">
          <img src={facebook} alt="facebook" />
        </a>
      </div>
    </footer>
  );
}
