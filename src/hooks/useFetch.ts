import { useEffect, useState } from 'react';
import api from '../services/api';

const useFetch = (resource: string, initialData: any, formatData: (data: any) => any) => {
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
        let responseData = response.data;

        if (!didCancel) {
          if (formatData) {
            responseData = await formatData(responseData);
          }

          if (url.includes('page=')) {
            const oldData = data?.results ? data.results : [];
            const newData = { ...responseData, results: [...oldData, ...responseData.results] };
            setData(newData);
          } else {
            setData(responseData);
          }
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

  return [{ data, isLoading, isError, url }, setUrl];
};

export default useFetch;
