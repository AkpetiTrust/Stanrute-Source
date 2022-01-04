import React from "react";
import style from "./career.module.css";
import logo from "./Stanrute.png";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function Career() {
  return (
    <section className={style.career}>
      <Navbar textColor="#00422E">
        <Link to="/" className={style.logo}>
          <img src={logo} alt="Logo" />
        </Link>
      </Navbar>
      <section className={style.hero}>
        <h1>
          We are <span>Stanrute</span>
        </h1>
        <div className="center">
          <p>
            Our team is building magic for the new financial economy. Join us
            today.
          </p>
        </div>
        <a href="/" className="btn">
          Apply
        </a>
      </section>
      <main className={style.main}>
        <h1>Our Current Openings</h1>
      </main>
    </section>
  );
}
