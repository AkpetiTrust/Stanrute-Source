import React from "react";
import style from "./service.module.css";

export default function Service({ children, backgroundColor, reverse }) {
  return (
    <section
      className={`${style.service} ${reverse ? style.reverse : ""}`}
      style={{ color: backgroundColor }}
    >
      {children}
    </section>
  );
}
