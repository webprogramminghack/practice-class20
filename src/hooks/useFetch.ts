import { useEffect, useState } from 'react';

type useFetchReturnType<T> = {
  data: T | null;
  loading: boolean;
  error: Error | null;
};

export function useFetch<T>(url: string): useFetchReturnType<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(
            `Failed to fetch data: ${response.status} ${response.statusText}`
          );
        }

        const jsonData = await response.json();

        setData(jsonData);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        } else {
          throw new Error('Not an error instance');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}
