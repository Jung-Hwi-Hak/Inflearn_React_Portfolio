import type { FormEvent } from "react";

export const wrapAsyncFunc =
  <E>(asyncFunc: (event: E) => Promise<void>) =>
  (event: E): void => {
    void asyncFunc(event);
  };

// Form 전용
export const wrapFormAsyncFunc =
  (asyncFunc: () => Promise<void>) =>
  (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    void asyncFunc();
  };
