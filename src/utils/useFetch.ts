import { useEffect, useState } from 'react';
import api from '../services/api';

const useFetch = (resource: string, initialData: any, formatData: any) => {
  const [url, setUrl] = useState(resource);
  const [data, setData] = useState(initialData);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const response = await api.get(url);
        let response_data = response.data;

        if (!didCancel) {
          if (formatData) {
            const t0 = performance.now();
            response_data = await formatData(response_data);
            const t1 = performance.now();
            console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
          }
          setData(response_data);
          setIsLoading(false);
        }
      } catch (error) {
        if (!didCancel) {
          setIsError(true);
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      didCancel = true;
    };
  }, [url]);

  return [{ data, isLoading, isError }, setUrl];
};

export default useFetch;
