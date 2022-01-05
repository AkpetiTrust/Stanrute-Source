import React from "react";
import Service from "./Services/Service";
import Features from "./Features";
import Testimony from "./Testimony";
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
              building out a platform for this. Reach out fo us to learn more.
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

        <Service backgroundColor={"#e1ebff"}>
          <h3 className="talk-title text-secondary">
            Financial Market Education
          </h3>
          <section className="image-container center">
            <img src={Education} alt="Education" />
          </section>
          <section className="talk">
            <p>
              We're launching into a new normal in the world economy where your
              digital assets determines to a great extent your financial state.
              Learn how to harness the new economy today.
            </p>
            <a href="#" className="btn btn-secondary">
              Start Learning
            </a>
          </section>
        </Service>

        <Service backgroundColor={"#E5FFF4"} reverse={true}>
          <h3 className="talk-title text-primary">Airtime Groove</h3>
          <section className="image-container center">
            <img src={Airtime} alt="Airtime Groove" />
          </section>
          <section className="talk">
            <p>
              We're launching into a new normal in the world economy where your
              digital assets determines to a great extent your financial state.
              Learn how to harness the new economy today.
            </p>
            <a href="#" className="btn btn-primary btn-soon">
              Coming soon
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
