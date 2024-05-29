import axios, { isAxiosError } from "axios";
import { type ClassValue, clsx } from "clsx";
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

export const formatEpisode = (episodeCode: string) => {
  const [season, episode] = episodeCode.slice(1).split("E");

  const number = (fragment: string) =>
    fragment[0] === "0" ? fragment[1] : fragment;

  return `Season ${number(season)} Episode ${number(episode)}`;
};

export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  timeout = 700,
): ((...args: Parameters<T>) => void) => {
  let timer: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(null, args);
    }, timeout);
  };
};
