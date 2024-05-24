"use client";

import axios, { isAxiosError } from "axios";
import { useEffect, useState } from "react";

export function useClientFetch(query: string) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/${query}`,
        );

        setData(response.data.results);
        setIsLoading(false);
        setError(null);
      } catch (e) {
        setIsLoading(false);
        setError((e as Error).message);
        if (isAxiosError(e)) {
          console.log(`Axios error: ${e}`);
        } else {
          console.log(`Fetching error: ${e}`);
        }
      }
    };

    fetchData();
  }, [query]);

  return { data, isLoading, error };
}
