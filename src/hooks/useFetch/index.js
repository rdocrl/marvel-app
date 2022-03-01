import { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';

const useFetch = (url, debounceTime = 0) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = () => {
      setLoading(true);
      setData(null);
      setError(null);
      fetch(url, { signal: abortController.signal })
        .then((res) => {
          if (!res.ok) {
            console.error(res.status, res.statusText);
            throw 'Error in network request';
          }
          return res.json();
        })
        .then((json) => {
          if (!abortController.signal.aborted) {
            json?.data?.results && setData(json.data.results);
          }
        })
        .catch((err) => {
          if (!abortController.signal.aborted) {
            setError(err);
          }
        })
        .finally(() => {
          if (!abortController.signal.aborted) {
            setLoading(false);
          }
        });
    };

    debounceTime ? debounce(fetchData, debounceTime)() : fetchData();

    return () => {
      abortController.abort();
    };
  }, [url]);

  return [data, loading, error];
};

export default useFetch;
