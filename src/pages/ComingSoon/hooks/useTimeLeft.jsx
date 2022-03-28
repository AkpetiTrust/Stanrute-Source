import React from "react";
import { useState } from "react";
import useInterval from "../../Home/useInterval";

function useTimeLeft() {
  const [timeLeft, setTimeLeft] = useState(
    new Date(2022, 3, 1).getTime() - Date.now()
  );

  useInterval(() => {
    setTimeLeft(new Date(2022, 3, 1).getTime() - Date.now());
  }, 1000);

  return timeLeft;
}

export default useTimeLeft;
