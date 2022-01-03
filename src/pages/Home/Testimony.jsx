import React from "react";
import TestimonyPic from "./images/testimony.png";

export default function Testimony() {
  return (
    <section className="testimony grid">
      <figure className="testimony-image">
        <img src={TestimonyPic} alt="testimony" />
      </figure>
      <section className="testimony-talk">
        <h3>What are people saying?</h3>
        <div className="card">
          <p>
            If I had to choose again, I'll go for Stanrute! The experience of
            their product is great and the customer service are always available
            to respond to issues.
          </p>
        </div>
        <div className="name-container">
          <p className="name">Ken Yahiru</p>
          <p className="text-primary">Student, IMSU</p>
        </div>
      </section>
    </section>
  );
}
