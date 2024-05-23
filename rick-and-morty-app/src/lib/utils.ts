"use client";

import axios, { Axios, AxiosError, AxiosResponse, isAxiosError } from "axios";
import { type ClassValue, clsx } from "clsx";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function useFetch(query: string) {
  try {
    const { data } = await axios.get(
      `https://rickandmortyapi.com/api/${query}`,
    );

    return data;
  } catch (e) {
    if (isAxiosError(e)) {
      throw Error(`Axios error: ${e}`);
    } else {
      throw Error(`Fetching error: ${e}`);
    }
  }
}

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

export function formatEpisode(episodeCode: string) {
  const [season, episode] = episodeCode.slice(1).split("E");

  const seasonNumber = season.replace("0", "");

  const episodeNumber = episode.replace("0", "");

  return `Season ${seasonNumber} Episode ${episodeNumber}`;
}
