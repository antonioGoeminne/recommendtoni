import { useEffect, useState } from "react";

export const useDebounce = (value, time) => {
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, time);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return debouncedValue;
};
