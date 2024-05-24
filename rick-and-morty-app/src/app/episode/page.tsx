import React from "react";
import PaginationItem from "@/components/PaginationItem";
import { useFetch } from "@/lib/utils";
import EpisodeItem from "@/components/episode/EpisodeItem";

type EpisodesPageProps = {
  params: string;
  searchParams: {
    page: string;
  };
};

const EpisodesPage = async ({ searchParams }: EpisodesPageProps) => {
  const { results } = await useFetch(
    `episode?page=${searchParams.page || "1"}`,
  );

  const episodes: Episode[] = results;

  return (
    <section className="container my-4 min-h-[85vh] md:my-10">
      <h2 className="my-6 text-2xl font-semibold text-white">
        All the episodes:
      </h2>

      {episodes?.map((episode) => (
        <EpisodeItem key={episode.id} {...episode} />
      ))}

      <PaginationItem paginationLength={3} href={"episode"} />
    </section>
  );
};

export default EpisodesPage;
