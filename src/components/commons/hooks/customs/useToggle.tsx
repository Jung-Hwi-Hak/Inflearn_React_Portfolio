import { useState } from "react";

export const useToggle = (): [boolean, () => void] => {
  const [toggle, setToggle] = useState(false);

  const onToggle = (): void => {
    setToggle((prev) => !prev);
  };

  return [toggle, onToggle];
};
