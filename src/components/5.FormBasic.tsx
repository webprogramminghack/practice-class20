import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Button } from './Button';

export const FormBasic: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(`Name: ${name}, Email: ${email}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name: </label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={handleChangeName}
          />
        </div>

        <div>
          <label htmlFor='email'>Email: </label>
          <input
            type='text'
            id='email'
            value={email}
            onChange={handleChangeEmail}
          />
        </div>

        <Button>Submit</Button>
      </form>
    </div>
  );
};
