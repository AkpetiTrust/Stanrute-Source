import React from "react";
import CEO from "./images/CEO.png";

export default function Features() {
  return (
    <section className="features">
      <h1 className="features-title">
        It only gets <span className="text-secondary">better!</span>
      </h1>
      <p className="features-talk">
        This has been our anthem, while upholding our values we'll keep on
        delivering high level of excellent to our community.
      </p>

      <section className="inner grid">
        <div className="feature">
          <h3 className="feature-title">Standard</h3>
          <p className="feature-talk">
            At Stanrute, our services come to you on a gold platter. We offer
            high quality expertise that is worth what you pay and more. Most of
            our services cannot be found elsewhere.
          </p>
        </div>
        <div className="feature">
          <h3 className="feature-title">Reliable</h3>
          <p className="feature-talk">
            You can always count on us in terms of consistency. Well grounded in
            the services we offer, you can depend on us to provide you with a
            transparent mode of operation both now and in the long run.
          </p>
        </div>
        <div className="feature">
          <h3 className="feature-title">Trustworthy</h3>
          <p className="feature-talk">
            Being trustworthy is to be full of integrity. This is what Stanrute
            thrives on. We're honest and you can totally trust us to give out
            value for your payment.
          </p>
        </div>
        <figure className="ceo-container">
          <img src={CEO} alt="CEO" />
          <figcaption>
            <p className="name">Flourish Ugane</p>
            <p className="text-primary">CEO, Stanrute</p>
          </figcaption>
        </figure>
      </section>
    </section>
  );
}
