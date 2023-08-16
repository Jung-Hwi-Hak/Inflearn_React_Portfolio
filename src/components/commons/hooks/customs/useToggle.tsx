import { useCallback, useState } from "react";

export const useToggle = (): [boolean, () => void] => {
  const [toggle, setToggle] = useState(false);

  const onToggle = useCallback((): void => {
    setToggle((prev) => !prev);
  }, []);

  return [toggle, onToggle];
};
