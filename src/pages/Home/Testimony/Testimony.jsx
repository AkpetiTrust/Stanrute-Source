import { React, useState } from "react";
import style from "./index.module.css";
import TestimonyPic from "./testimony.png";

export default function Testimony() {
  const [slides, setSlides] = useState([
    {
      img: TestimonyPic,
      testimony:
        "If I had to choose again, I'll go for Stanrute! The experience of their product is great and the customer service are always available to respond to issues.",
      name: "Ken Yahiru",
      position: "Student, IMSU",
      index: 0,
    },
    {
      img: TestimonyPic,
      testimony:
        "If I had to choose again, I'll go for Stanrute! The experience of their product is great and the customer service are always available to respond to issues.",
      name: "Ken Yahiru",
      position: "Student, IMSU",
      index: 1,
    },
    {
      img: TestimonyPic,
      testimony:
        "If I had to choose again, I'll go for Stanrute! The experience of their product is great and the customer service are always available to respond to issues.",
      name: "Ken Yahiru",
      position: "Student, IMSU",
      index: 2,
    },
  ]);

  const [activeSlide, setActiveSlide] = useState({
    img: TestimonyPic,
    testimony:
      "If I had to choose again, I'll go for Stanrute! The experience of their product is great and the customer service are always available to respond to issues.",
    name: "Ken Yahiru",
    position: "Student, IMSU",
    index: 0,
  });

  const [translate, setTranslate] = useState(0);

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
                    setActiveSlide((prevActiveSlide) =>
                      previous(prevActiveSlide)
                    );
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 19L8 12L15 5"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    setActiveSlide((prevActiveSlide) => next(prevActiveSlide));
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 5L16 12L9 19"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
