import React from "react";
import hands from "./images/hands.png";

export default function Groove() {
  return (
    <section className="groove">
      <h1>We are launching Airtime Groove soon!</h1>
      <p>Be the first to know when we launch, join the waitlist.</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input type="email" placeholder="Email Address" />
        <button className="btn" type="submit">
          Join waitlist
        </button>
      </form>
      <img src={hands} alt="hands" />
    </section>
  );
}
