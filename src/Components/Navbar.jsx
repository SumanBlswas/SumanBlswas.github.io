import { useState } from "react";

export const useFragrance = () => {
  let [count, setCount] = useState(0);
  const [truth, setTruth] = useState(false);
  const toogleFunc = () => {
    setTruth(!truth);
    setCount((count) => count + 1);
  };

  return [truth, toogleFunc, count];
};
