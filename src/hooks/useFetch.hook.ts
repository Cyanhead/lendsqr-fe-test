import { useState, useEffect } from 'react';

type FetchState<T> = {
  data: T | null;
  error: Error | null;
  loading: boolean;
};

const useFetch = <T>(
  url: string | null,
  options?: RequestInit
): FetchState<T> => {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    error: null,
    loading: true,
  });

  useEffect(() => {
    if (url === null) {
      return;
    }

    const fetchData = async () => {
      try {
        setState({ data: null, error: null, loading: true });
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = (await response.json()) as T;
        setState({ data, error: null, loading: false });
      } catch (error) {
        setState({ data: null, error: error as Error, loading: false });
      }
    };

    fetchData();
  }, [options, url]);

  return state;
};

export default useFetch;
