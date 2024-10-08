import { useInput } from '@/hooks/useInput';
import React from 'react';

export const InputForm: React.FC = () => {
  const { value: name, onChange: onNameChange } = useInput('', {
    logging: true,
  });
  const { value: email, onChange: onEmailChange } = useInput('');

  return (
    <div>
      <h1>Custom Hook: Input Form</h1>
      <div>
        <label>Name: </label>
        <input type='text' value={name} onChange={onNameChange} />
      </div>

      <div>
        <label>Email: </label>
        <input type='text' value={email} onChange={onEmailChange} />
      </div>
    </div>
  );
};
