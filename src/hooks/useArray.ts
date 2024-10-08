import { useCallback, useState } from 'react';

export function useArray<T>(defaultValue: T[] = []) {
  const [array, setArray] = useState<T[]>(defaultValue);

  const push = useCallback((element: T): void => {
    setArray((a) => [...a, element]);
  }, []);

  const filter = useCallback(
    (callback: (value: T, index: number, array: T[]) => boolean): void => {
      setArray((a) => a.filter(callback));
    },
    []
  );

  const update = useCallback((index: number, newElement: T): void => {
    setArray((a) => [...a.slice(0, index), newElement, ...a.slice(index + 1)]);
  }, []);

  const remove = useCallback((index: number): void => {
    setArray((a) => [...a.slice(0, index), ...a.slice(index + 1)]);
  }, []);

  const clear = useCallback((): void => {
    setArray([]);
  }, []);

  return { array, set: setArray, push, filter, update, remove, clear };
}
