import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Logo from "./images/logo.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero flex">
      <Navbar textColor={"#fff"}>
        <Link to="/" className="logo">
          <img src={Logo} alt="Logo" />
        </Link>
      </Navbar>
      <section className="inner">
        <h1>
          Transactions only got <span className="colored">better</span>
        </h1>
        <p>
          A safe platform to trade digital assets and perform everyday
          transactions.
        </p>
        <a href="#" className="btn">
          Get Started
        </a>
      </section>
    </section>
  );
}
