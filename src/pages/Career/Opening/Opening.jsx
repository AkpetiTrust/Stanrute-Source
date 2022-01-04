import React from "react";
import style from "./index.module.css";

export default function Opening({ title, remote }) {
  return (
    <div className={style.opening}>
      <p className={style.title}>{title}</p>
      <p className={style.status}>{remote ? "Remote" : "In-person"}</p>
      <div className={style.btn_group}>
        <a href="/" className={`btn ${style.btn_green}`}>
          Competitive Benefits
        </a>
        <a href="/" className="btn-primary btn">
          Apply
        </a>
      </div>
    </div>
  );
}
