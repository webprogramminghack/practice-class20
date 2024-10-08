import { useArray } from '@/hooks/useArray';
import React from 'react';
import { Button } from '../Button';

export const ArrayComponent: React.FC = () => {
  const { array, push, update, remove, filter, clear } = useArray<number>([
    1, 2, 3,
  ]);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>With Custom Hook useArray</h1>
      <div>
        <p>Current Array: </p>
        <p
          style={{
            border: '1px solid black',
            width: 'fit-content',
            margin: '0 auto',
            padding: '0.5rem',
            marginTop: '0.5rem',
          }}
        >
          {array.join(', ')}
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          gap: '1rem',
          margin: '0 auto',
          width: 'fit-content',
          marginTop: '1rem',
        }}
      >
        <Button onClick={() => push(array.length + 1)}>Push</Button>
        <Button onClick={() => update(1, 100)}>
          Update Second Element To 100
        </Button>
        <Button onClick={() => remove(0)}>Remove First Element</Button>
        <Button onClick={clear}>Clear The Array</Button>
        <Button onClick={() => filter((n) => n % 2 === 0)}>
          Remove Odd Numbers
        </Button>
      </div>
    </div>
  );
};
