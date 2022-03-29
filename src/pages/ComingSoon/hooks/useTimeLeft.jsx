import React from "react";
import { useState } from "react";
import useInterval from "../../Home/useInterval";

function useTimeLeft() {
  const [timeLeft, setTimeLeft] = useState(
    new Date(2022, 3, 1).getTime() - Date.now()
  );

  let delay = 1000;

  if (timeLeft < 0) {
    delay = null;
  }

  useInterval(() => {
    setTimeLeft(new Date(2022, 3, 1).getTime() - Date.now());
  }, delay);

  return timeLeft;
}

export default useTimeLeft;
