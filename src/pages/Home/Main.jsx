import React from "react";
import Service from "./Services/Service";
import Features from "./Features";
import Testimony from "./Testimony/Testimony";
import Groove from "./Groove";
import Etrading from "./images/e-trading.png";
import GiftCard from "./images/gift_card.png";
import Beta from "./Beta/Beta";
import ChooseUs from "./ChooseUs/ChooseUs";
import Learn from "./Learn/Learn";

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
              Trust our secured platform and process with your digital assets
              (Non-Fungible Tokens), e-currencies (cryptocurrencies). Trade at
              good rates.
            </p>
            <a href="#" className="btn btn-secondary">
              Trade with us
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
              We buy various types of gift cards from over 15 countries.
              Experience convenience and security while trading your cards.
            </p>
            <a href="#" className="btn btn-primary">
              Start Trading
            </a>
          </section>
        </Service>
      </section>
      <ChooseUs />
      <Features />
      <Learn />
      <Beta />
      <Groove />
      <Testimony />
    </section>
  );
}
