"use client";

import React from "react";
import EpisodeItems from "@/components/episode/EpisodeItems";
import { useSearchParams } from "next/navigation";
import PaginationItem from "@/components/PaginationItem";

const EpisodesPage = async () => {
  const searchParams = useSearchParams();

  const page = searchParams.get("page");

  return (
    <section className="container my-10">
      <h2 className="my-6 text-2xl font-semibold text-white">
        All the episodes:
      </h2>

      <EpisodeItems page={page || "1"} />

      <PaginationItem lenght={3} href={"episode"} />
    </section>
  );
};

export default EpisodesPage;
