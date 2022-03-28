import React from "react";
import style from "./index.module.css";
import useTimeLeft from "../hooks/useTimeLeft";

function Counter() {
  const timeLeft = useTimeLeft();

  const twoDigits = (number) => {
    return number.toLocaleString(undefined, {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
  };

  const parseTime = (timeLeft) => {
    timeLeft /= 1000;
    let secondsInDay = 24 * 60 * 60;
    let days = Math.floor(timeLeft / secondsInDay);
    let remainder = timeLeft % secondsInDay;
    let hours = Math.floor(remainder / (60 * 60));
    remainder %= 60 * 60;
    let minutes = Math.floor(remainder / 60);
    let seconds = remainder % 60;
    seconds = Math.floor(seconds);

    hours = twoDigits(hours);
    minutes = twoDigits(minutes);
    seconds = twoDigits(seconds);

    if (days === 0) {
      days = "00";
    }

    if (timeLeft < 0) {
      days = "00";
      hours = "00";
      minutes = "00";
      seconds = "00";
    }

    return { days, hours, minutes, seconds };
  };

  let timeObject = parseTime(timeLeft);

  return (
    <div className={style.counter}>
      <div className={style.timeBox}>{timeObject.days}</div>
      <div className={style.timeBox}>{timeObject.hours}</div>
      <div className={style.timeBox}>{timeObject.minutes}</div>
      <div className={style.timeBox}>{timeObject.seconds}</div>
    </div>
  );
}

export default Counter;
