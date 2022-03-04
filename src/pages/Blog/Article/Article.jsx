import React from "react";
import style from "./index.module.css";

function Article({ image, link, title, time, date, subtitle }) {
  return (
    <a href={link} className={style.article}>
      <img src={image} alt={title} />
      <p className={style.title}>{title}</p>
      <p className={style.subtitle}>{subtitle}</p>
      <div className={style.bottom}>
        <p>{date}</p>
        <p>{time}</p>
      </div>
    </a>
  );
}

export default Article;
