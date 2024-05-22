"use client";

import React from "react";
import EpisodeItems from "@/components/EpisodeItems";
import { useSearchParams } from "next/navigation";
import PaginationItem from "@/components/PaginationItem";

const EpisodesPage = async () => {
  const searchParams = useSearchParams();

  const page = searchParams.get("page");

  return (
    <div className="container my-10">
      <h2 className="my-6 text-2xl font-semibold text-white">
        All the episodes:
      </h2>

      <EpisodeItems page={page || "1"} />

      <PaginationItem lenght={3} href={"episode"} />
    </div>
  );
};

export default EpisodesPage;
