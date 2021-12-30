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
          Making everyone financially <span className="colored">free</span>{" "}
        </h1>
        <p>
          A platform that gives everyone an easy entry into the financial
          ecosystem of the future.
        </p>
        <a href="#" className="btn">
          Get Started
        </a>
      </section>
    </section>
  );
}
