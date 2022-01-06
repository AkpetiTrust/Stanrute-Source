import React from "react";
import style from "./index.module.css";
import stanrute from "./Stanrute.png";

export default function Preloader() {
  return (
    <section aria-hidden className={style.preloader}>
      <img src={stanrute} alt="Starute Logo" />
    </section>
  );
}
