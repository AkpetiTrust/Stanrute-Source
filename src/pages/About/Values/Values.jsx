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
        This has been our anthem, while upholding our values we'll keep on
        delivering high level of excellent to our community.
      </p>

      <section className={`${style.inner} grid`}>
        <div className={style.value}>
          <div className={style.dashes} aria-hidden></div>
          <h3 className={style.value_title}>Standard</h3>
          <p className={style.value_talk}>
            At Stanrute, our services come to you on a gold platter. We offer
            high quality expertise that is worth what you pay and more. Most of
            our services cannot be found elsewhere.
          </p>
        </div>
        <div className={style.value}>
          <div className={style.dashes} aria-hidden></div>
          <h3 className={style.value_title}>Reliable</h3>
          <p className={style.value_talk}>
            You can always count on us in terms of consistency. Well grounded in
            the services we offer, you can depend on us to provide you with a
            transparent mode of operation both now and in the long run.
          </p>
        </div>
        <div className={style.value}>
          <h3 className={style.value_title}>Trustworthy</h3>
          <p className={style.value_talk}>
            Being trustworthy is to be full of integrity. This is what Stanrute
            thrives on. We're honest and you can totally trust us to give out
            value for your payment.
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
