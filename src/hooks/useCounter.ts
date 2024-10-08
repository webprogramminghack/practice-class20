import { useState } from 'react';

type UseCounterReturnType = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

export function useCounter(initialValue: number = 0): UseCounterReturnType {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}
