import React from "react";
import style from "./index.module.css";

const Loading = () => {
  return (
    <div className={`${style.loading} center`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Loading;
