import { React, useState, useEffect } from "react";
import useInterval from "../useInterval";
import style from "./index.module.css";
import Samuel from "./Samuel.png";
import Desmund from "./Desmund.png";
import Bright from "./Bright.png";
import Daniel from "./Daniel.png";

export default function Testimony() {
  const [slides, setSlides] = useState([
    {
      img: Samuel,
      testimony: `I must say that the people who work at Stanrute 
        are very trustworthy and transparent. 
        They're open 24 hours and respond in a 
        matter of seconds. If you're looking for a brand 
        to trade with, Stanrute is for you.`,
      name: "Samuel Isiwu",
      position: "CEO, Stylcon",
      index: 0,
    },
    {
      img: Desmund,
      testimony: `I've been trading with Stanrute for more than 
        one year and I must say that they live up to their 
        standard. Building a brand is one thing and it 
        being sustainable is another. I'm thankful...`,
      name: "Desmund Oris",
      position: "CEO, D’Oris Group",
      index: 1,
    },
    {
      img: Bright,
      testimony: `Stanrute has been the best exchange brands 
        I've used since I started trading till present. 
        They're indeed ready for business. 
        Stanrute is here to stay!
        `,
      name: "Edafe Kevwe Bright",
      position: "",
      index: 2,
    },
    {
      img: Daniel,
      testimony: `Are you thinking fast and reliable? 
      Then Stanrute is the Crypto trading plug for you. 
      Since I've been in the crypto space, I have never 
      witnessed a trading company that's as fast as 
      Stanrute. 
      Trading with them will leave you satisfied.
        `,
      name: "Daniel Okorie",
      position: "",
      index: 3,
    },
  ]);

  const [activeSlide, setActiveSlide] = useState({
    img: Samuel,
    testimony: `I must say that the people who work at Stanrute 
      are very trustworthy and transparent. 
      They're open 24 hours and respond in a 
      matter of seconds. If you're looking for a brand 
      to trade with, Stanrute is for you.`,
    name: "Samuel Isiwu",
    position: "CEO, Stylcon",
    index: 0,
  });

  const [translate, setTranslate] = useState(0);

  const [timeStamp, setTimeStamp] = useState(new Date().getTime() / 1000);

  // Function to go to next slide
  const next = (activeSlide) => {
    let newActiveIndex = activeSlide.index + 1;
    newActiveIndex > slides.length - 1
      ? (newActiveIndex = 0)
      : (newActiveIndex = newActiveIndex);
    setTranslate(newActiveIndex * 100);
    return slides[newActiveIndex];
  };

  // Function to go to previous slide
  const previous = (activeSlide) => {
    let newActiveIndex = activeSlide.index - 1;
    newActiveIndex < 0
      ? (newActiveIndex = 0)
      : (newActiveIndex = newActiveIndex);
    setTranslate(newActiveIndex * 100);
    return slides[newActiveIndex];
  };

  useInterval(() => {
    if (new Date().getTime() / 1000 - timeStamp > 2) {
      setTimeStamp(new Date().getTime() / 1000);
      setActiveSlide((prevActiveSlide) => next(prevActiveSlide));
    }
  }, 1500);

  return (
    <section className={style.testimony}>
      <h3 className={style.title}>What are people saying?</h3>
      <img src={activeSlide.img} className={style.img} alt="Image" />
      <div className={style.slides_container}>
        <div
          className={style.slides}
          style={{ transform: `translateX(${-translate}%)` }}
        >
          {slides.map((slide) => (
            <div className={style.slide} key={slide.index}>
              <div className={style.btn_group}>
                <button
                  onClick={() => {
                    setTimeStamp(new Date().getTime() / 1000);
                    setActiveSlide((prevActiveSlide) =>
                      previous(prevActiveSlide)
                    );
                  }}
                >
                  <svg
                    width="70"
                    height="70"
                    viewBox="0 0 70 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M35 64.1668C18.8878 64.1668 5.83337 51.1124 5.83337 35.0002C5.83337 18.8879 18.8878 5.8335 35 5.8335C51.1123 5.8335 64.1667 18.8879 64.1667 35.0002C64.1667 51.1124 51.1123 64.1668 35 64.1668ZM38.3989 47.2784L29.5195 38.7636H50.9947C52.5588 38.7636 53.8172 37.5052 53.8172 35.941V34.0593C53.8172 32.4951 52.5588 31.2367 50.9947 31.2367H29.5195L38.3989 22.7219C39.5397 21.6282 39.5632 19.8053 38.4459 18.688L37.1523 17.4061C36.0467 16.3006 34.2591 16.3006 33.1654 17.4061L17.5588 33.0008C16.4533 34.1063 16.4533 35.894 17.5588 36.9877L33.1654 52.5943C34.2709 53.6998 36.0585 53.6998 37.1523 52.5943L38.4459 51.3123C39.5632 50.1951 39.5397 48.3721 38.3989 47.2784Z"
                      fill="#009153"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    setTimeStamp(new Date().getTime() / 1000);
                    setActiveSlide((prevActiveSlide) => next(prevActiveSlide));
                  }}
                >
                  <svg
                    width="70"
                    height="70"
                    viewBox="0 0 70 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M34.9999 5.8335C51.1122 5.8335 64.1666 18.8879 64.1666 35.0002C64.1666 51.1124 51.1122 64.1668 34.9999 64.1668C18.8877 64.1668 5.83325 51.1124 5.83325 35.0002C5.83325 18.8879 18.8877 5.8335 34.9999 5.8335ZM31.6011 22.7219L40.4804 31.2367H19.0053C17.4411 31.2367 16.1827 32.4951 16.1827 34.0593V35.941C16.1827 37.5052 17.4411 38.7636 19.0053 38.7636H40.4804L31.6011 47.2784C30.4603 48.3721 30.4367 50.1951 31.554 51.3123L32.8477 52.5943C33.9532 53.6998 35.7408 53.6998 36.8346 52.5943L52.4411 36.9995C53.5466 35.894 53.5466 34.1063 52.4411 33.0126L36.8346 17.3943C35.7291 16.2888 33.9415 16.2888 32.8477 17.3943L31.554 18.6762C30.4367 19.8053 30.4603 21.6282 31.6011 22.7219V22.7219Z"
                      fill="#009153"
                    />
                  </svg>
                </button>
              </div>
              <div className={style.card}>
                <p>{slide.testimony}</p>
              </div>
              <p className={style.name}>{slide.name}</p>
              <p className={`${style.position} text-primary`}>
                {slide.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
