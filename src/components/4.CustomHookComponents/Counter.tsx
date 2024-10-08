import React from 'react';
import { Button } from '../Button';
import { useCounter } from '@/hooks/useCounter';

export const Counter: React.FC = () => {
  // const [count, setCount] = useState(0);

  // const increment = () => setCount(count + 1);
  // const decrement = () => setCount(count - 1);
  // const reset = () => setCount(0);

  const { count, increment, decrement, reset } = useCounter();

  return (
    <div>
      <p>Current count: {count}</p>
      <Button onClick={increment}>Increment</Button>{' '}
      <Button onClick={decrement}>Decrement</Button>{' '}
      <Button onClick={reset}>Reset</Button>
    </div>
  );
};
