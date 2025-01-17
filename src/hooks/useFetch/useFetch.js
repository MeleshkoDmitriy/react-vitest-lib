import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
      setIsError(false);
      setIsLoading(true);

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setData(data);
      
    } catch (error) {
      setIsError(true);
      console.error("Fetch Error", error);
    } finally {
      setIsLoading(false);
    }

    return data;
  };

  useEffect(() => {
    if (!url) return;

    fetchData();
  }, [url]);

  return { data, isLoading, isError };
};
