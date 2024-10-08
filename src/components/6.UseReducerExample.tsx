import React, { useReducer } from 'react';
import { Button } from './Button';

const initialState = 0;

type Action =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'set'; payload: number };

function counterReducer(state: number, action: Action): number {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'set':
      return action.payload;
    default: {
      const _exhaustiveCheck: never = action;
      throw new Error(`Unhandled action type: ${_exhaustiveCheck}`);
    }
  }
}

export const CounterWithReducer: React.FC = () => {
  const [count, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h1>Count: {count}</h1>
      <Button onClick={() => dispatch({ type: 'increment' })}>
        Increment
      </Button>{' '}
      <Button onClick={() => dispatch({ type: 'decrement' })}>Decrement</Button>{' '}
      <Button onClick={() => dispatch({ type: 'set', payload: 100 })}>
        Set to 100
      </Button>{' '}
    </div>
  );
};
