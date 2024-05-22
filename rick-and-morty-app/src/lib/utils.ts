import axios, { AxiosResponse } from "axios"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function useFetch(query: string) {
  const {data} = await axios.get(`https://rickandmortyapi.com/api/${query}`)
 
  
  return data
}

export function formatEpisode(episodeCode: string) {
  const [season, episode] = episodeCode.slice(1).split('E');
  
  const seasonNumber = season.replace('0', '')

  const episodeNumber = episode.replace('0', '')

  return `Season ${seasonNumber} Episode ${episodeNumber}`;
}