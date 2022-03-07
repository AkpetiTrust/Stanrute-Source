import React from "react";
import style from "./index.module.css";
import CEO from "./CEO.png";

function Values() {
  return (
    <section className={style.values}>
      <h1 className={style.values_title}>
        It only gets <span className="text-secondary">better!</span>
      </h1>
      <p className={style.values_talk}>
        We are building what lasts. Our core values at Stanrute are:
      </p>

      <section className={`${style.inner} grid`}>
        <div className={style.value}>
          <div className={style.dashes} aria-hidden></div>
          <h3 className={style.value_title}>Standard</h3>
          <p className={style.value_talk}>
            Stanrute's services are rendered to you on a platter of gold.
          </p>
        </div>
        <div className={style.value}>
          <div className={style.dashes} aria-hidden></div>
          <h3 className={style.value_title}>Reliable</h3>
          <p className={style.value_talk}>
            Honesty is what drives Stanrute. We aim to be worthy of your trust.
          </p>
        </div>
        <div className={style.value}>
          <h3 className={style.value_title}>Trustworthy</h3>
          <p className={style.value_talk}>
            At Stanrute, our mode of operations is transparent giving you the
            comfort you need.
          </p>
        </div>
        <figure className={style.ceo_container}>
          <img src={CEO} alt="CEO" />
          <figcaption>
            <p className={style.name}>Flourish Ugane</p>
            <p className="text-primary">CEO, Stanrute</p>
          </figcaption>
        </figure>
      </section>
    </section>
  );
}

export default Values;
