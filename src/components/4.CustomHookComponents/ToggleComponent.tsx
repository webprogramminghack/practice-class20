import { useToggle } from '@/hooks/useToggle';
import React from 'react';
import { Button } from '../Button';

export const ToggleComponent: React.FC = () => {
  const [isVisible, toggleVisibility] = useToggle();

  return (
    <div>
      <h1>Toggle Visibility Example</h1>
      <Button onClick={toggleVisibility}>
        {isVisible ? 'Hide Text' : 'Show Text'}
      </Button>

      {isVisible && <p>Hey, you can see me</p>}
    </div>
  );
};
