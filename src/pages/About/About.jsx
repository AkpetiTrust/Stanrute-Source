import React from "react";
import style from "./about.module.css";
import logo from "./Stanrute.png";
import history from "./History.png";
import rocket from "./Rocket.png";
import Values from "./Values/Values";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className={style.about}>
      <Navbar textColor="#00422E">
        <Link to="/" className={style.logo}>
          <img src={logo} alt="Logo" />
        </Link>
      </Navbar>
      <section className={style.hero}>
        <h1>
          <span>We Are</span> Stanrute
        </h1>
        <div className="center">
          <p>
            Driven by the passion to curb fraud and criminal activities in the
            crypto space, Stanrute is a crypto exchange brand that provides
            genuine services to customers willing to trade their coins and gift
            cards.
          </p>
        </div>
      </section>

      <main>
        <section className={style.talk}>
          <div>
            <div className={style.image_container}>
              <img src={history} alt="history" />
            </div>
            <p>
              Stanrute was founded in April 2021. Then, the company was known as
              Flourish Exchange but after a thorough rebranding process,
              STANRUTE was introduced on November, 2021. It is one of the
              fastest-growing crypto companies in West Africa.
            </p>
          </div>
          <div>
            <div>
              <p className={style.title}>Our Mission</p>
              <p>
                To build a platform where people can trade digital assets and
                perform everyday transactions seamlessly.
              </p>
            </div>
            <div className={style.image_container}>
              <img src={rocket} alt="rocket" />
            </div>
          </div>
        </section>
        <Values />
      </main>

      <Footer />
    </section>
  );
}

export default About;
