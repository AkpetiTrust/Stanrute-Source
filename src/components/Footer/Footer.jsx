import React from "react";
import style from "./index.module.css";
import logo from "./logo.png";
import facebook from "./facebook-f.svg";
import instagram from "./instagram.svg";
import telegram from "./telegram.svg";
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
          <a href="https://wa.me/2348088261852">Contact us</a>
        </div>
        <div className={style.col_2}>
          <p className={style.column_heading}>Legal</p>
          <a href="/">Terms of Services</a>
          <a href="/">Privacy Policy</a>
        </div>
        <div className={style.col_3}>
          <div className={style.social_icons}>
            <a href="https://wa.me/2348088261852">
              <img src={whatsapp} alt="whatsapp" />
            </a>
            <a href="https://www.instagram.com/mystanrute_/">
              <img src={instagram} alt="instagram" />
            </a>
            <a href="https://t.me/+GwfL6ttfuBljMjhk">
              <img src={telegram} alt="telegram" />
            </a>
            <a href="/">
              <img src={facebook} alt="facebook" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
