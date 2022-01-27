import React from "react";
import CEO from "./images/CEO.png";
import LogoWatermark from "./images/logo-watermark.png";

export default function Features() {
  return (
    <section className="features">
      <div className="watermark" aria-hidden>
        <img src={LogoWatermark} alt="watermark" />
      </div>
    </section>
  );
}
