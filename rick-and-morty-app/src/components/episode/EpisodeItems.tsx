import { useFetch } from "@/lib/utils";
import EpisodeItem from "./EpisodeItem";

type EpisodeItemsProps = {
  page: string;
};

const EpisodeItems = async ({ page }: EpisodeItemsProps) => {
  const { results } = await useFetch(`episode?page=${page}`);

  const episodes: Episode[] = results;

  return (
    <div>
      {episodes?.map((episode) => (
        <div key={episode.id}>
          <EpisodeItem {...episode} />
        </div>
      ))}
    </div>
  );
};

export default EpisodeItems;
