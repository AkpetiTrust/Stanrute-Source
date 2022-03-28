import React from "react";
import style from "./index.module.css";
import { Link } from "react-router-dom";

function Article({ image, link, title, time, date, subtitle, item }) {
  return (
    <Link to={link} state={{ item }} className={style.article}>
      <img src={image} alt={title} />
      <p className={style.title}>{title}</p>
      <p className={style.subtitle}>{subtitle}</p>
      <div className={style.bottom}>
        <p>{date}</p>
        <p>{time}</p>
      </div>
    </Link>
  );
}

export default Article;
