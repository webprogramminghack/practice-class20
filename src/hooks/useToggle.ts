import { useState, useCallback } from 'react';

type UseToggleReturn = [boolean, () => void];

export function useToggle(defaultValue: boolean = false): UseToggleReturn {
  const [value, setValue] = useState(defaultValue);

  const toggleValue = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  return [value, toggleValue];
}
