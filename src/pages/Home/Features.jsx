import React from "react";
import devfest from "./images/devfest.png";
import LogoWatermark from "./images/logo-watermark.png";

export default function Features() {
  return (
    <section className="features">
      <div className="watermark" aria-hidden>
        <img src={LogoWatermark} alt="watermark" />
      </div>

      <h1 className="features-title text-primary" data-aos="fade-right">
        Enjoy the support of a community &amp; our team of experts
      </h1>
      <section className="features-talk">
        <ul>
          <li>Support</li>
          <li>Trading tips and guides</li>
          <li>Learning Resources</li>
        </ul>
        <a href="https://wa.me/2348088261852" className="btn">
          Join our community
        </a>
        <div className="background" aria-hidden>
          <div className="colors">
            <div className="green"></div>
            <div className="orange"></div>
          </div>
          <img src={devfest} alt="devfest" className="picture" />
        </div>
      </section>
    </section>
  );
}
