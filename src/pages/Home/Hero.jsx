import { React, useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Logo from "./images/logo.png";
import { Link } from "react-router-dom";
import useInterval from "./useInterval";

export default function Hero() {
  const [text, setText] = useState("A");
  const [textArray, setTextArray] = useState([]);
  const [delay, setDelay] = useState(80);

  useEffect(() => {
    setTextArray(
      `A safe platform to trade digital assets and perform everyday transactions.`.split(
        ""
      )
    );
  }, []);

  useInterval(() => {
    if (text.length !== textArray.length) {
      setText((prevText) => textArray.slice(0, prevText.length + 1).join(""));
    } else {
      setDelay(null);
    }
  }, delay);

  return (
    <section className="hero flex">
      <Navbar textColor={"#fff"} checkScroll={true}>
        <Link to="/" className="logo">
          <img src={Logo} alt="Logo" />
        </Link>
      </Navbar>
      <section className="inner">
        <h1>
          Transactions only got <span className="colored">better</span>
        </h1>
        <p>
          {text} <span className="type" aria-hidden="true"></span>
        </p>
        <a href="https://wa.me/2348088261852" className="btn">
          Get Started
        </a>
      </section>
    </section>
  );
}
