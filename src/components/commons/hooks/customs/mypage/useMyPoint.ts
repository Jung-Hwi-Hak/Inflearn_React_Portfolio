import { useState } from "react";

export const useMyPoint = () => {
  const [isFocus, setIsFocus] = useState(0);

  return {
    isFocus,
    setIsFocus,
  };
};
