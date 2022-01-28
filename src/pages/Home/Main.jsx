import React from "react";
import Service from "./Services/Service";
import Features from "./Features";
import Testimony from "./Testimony/Testimony";
import Groove from "./Groove";
import Etrading from "./images/e-trading.png";
import GiftCard from "./images/gift_card.png";
import Education from "./images/education.png";
import Airtime from "./images/airtime.png";

export default function Main() {
  return (
    <section className="main">
      <h1 className="title">
        We're <span className="text-primary">raising</span> the standard in:
      </h1>
      <section className="services grid">
        <Service backgroundColor={"#e1ebff"}>
          <h3 className="talk-title text-secondary">E-Trading</h3>
          <section className="image-container center">
            <img src={Etrading} alt="E-trading" />
          </section>
          <section className="talk">
            <p>
              You can trade and save your digital assets with us - we're
              building out a platform for this. Reach out to us to learn more.
            </p>
            <a href="#" className="btn btn-secondary">
              Talk to us
            </a>
          </section>
        </Service>

        <Service backgroundColor={"#E5FFF4"} reverse={true}>
          <h3 className="talk-title text-primary">Gift Cards Trading</h3>
          <section className="image-container center">
            <img src={GiftCard} alt="Gift cards" />
          </section>
          <section className="talk">
            <p>
              We have a secure system and good rates in our Gift Cards Trading.
              You can buy and sell all types of Gift Cards with us. Reach out
              immediately.
            </p>
            <a href="#" className="btn btn-primary">
              Get started
            </a>
          </section>
        </Service>
      </section>
      <Features />
      <Testimony />
      <Groove />
    </section>
  );
}
