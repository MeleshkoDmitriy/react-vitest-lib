import { useState } from "react";

export const useCounter = (initialValue = 0) => {
  const [value, setValue] = useState(initialValue);

  const increment = () => setValue((prev) => prev + 1);
  const decrement = () => setValue((prev) => prev - 1);

  return {
    value,
    increment,
    decrement,
  };
};
