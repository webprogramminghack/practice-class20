import { useState, ChangeEvent, useEffect } from 'react';

type Option = {
  logging: boolean;
};

export function useInput(
  initialValue: string = '',
  { logging }: Option = { logging: false }
) {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const reset = () => setValue(initialValue);

  useEffect(() => {
    if (!logging || !value) {
      return;
    }

    console.log(value);
  }, [value, logging]);

  return { value, onChange, reset };
}
