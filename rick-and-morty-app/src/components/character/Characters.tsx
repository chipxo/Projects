"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import CharacterItems from "@/components/character/CharacterItems";
import { useClientFetch } from "@/lib/useClientFetch";
import PaginationItem from "@/components/PaginationItem";
import { genders, statuses } from "@/constances";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Filter from "@/components/character/Filter";
import FilterItem from "@/components/character/FilterItem";
import Spinner from "@/components/Spinner";
import { debounce } from "@/lib/utils";

const Characters = () => {
  const BASE_URL = "character";

  const [search, setSearch] = useState("");
  const [query, setQuery] = useState(BASE_URL);

  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page");
  const genderSearch = searchParams.get("gender") as Gender | null;
  const statusSearch = searchParams.get("status") as Status | null;

  const buildQuery = (
    name: string | null,
    gender: Gender | null,
    status: Status | null,
  ) => {
    const params = new URLSearchParams();

    if (name) params.append("name", name);
    if (gender) params.append("gender", gender);
    if (status) params.append("status", status);

    return `${BASE_URL}?${params.toString()}`;
  };

  const handleSearchCharacter = (query: string) => {
    router.push(query);
    setQuery(query);
  };

  const handleInputChange = (val: string) => {
    setSearch(val);

    const debouncedSearchCharacter = debounce((val: string) => {
      handleSearchCharacter(buildQuery(val, genderSearch, statusSearch));
    }, 300);

    debouncedSearchCharacter(val);
  };

  const handleGenderFilter = (gender: Gender) => {
    const debouncedGenderFilter = debounce((gender: Gender) => {
      handleSearchCharacter(buildQuery(search, gender, statusSearch));
    }, 300);

    debouncedGenderFilter(gender);
  };

  const handleStatusFilter = (status: Status) => {
    const debouncedStatusFilter = debounce((status: Status) => {
      handleSearchCharacter(buildQuery(search, genderSearch, status));
    }, 300);

    debouncedStatusFilter(status);
  };

  const reset = () => {
    handleSearchCharacter(BASE_URL);
    setSearch("");
  };

  const { data, isLoading, error } = useClientFetch(query);

  useEffect(() => {
    setQuery(`${BASE_URL}?page=${page || 1}`);
    setSearch("");
  }, [page]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[85vh] bg-background/20"
    >
      <div className="container rounded-b py-4">
        <div className="space-y-2 md:mb-8">
          <h2 className="text-center text-lg font-bold md:text-2xl">Search</h2>

          <Input
            type="text"
            placeholder="Enter the character name"
            className="bg-background/80"
            value={search}
            onChange={(e) => handleInputChange(e.target.value)}
          />
        </div>

        <div className="mb-4 flex gap-4 max-sm:flex-col">
          <p className="inline-flex h-[35px] items-center">Filter by</p>

          <Filter title="Gender">
            {genders.map((gender) => (
              <FilterItem
                key={gender}
                item={gender}
                searchParam={genderSearch}
                onClick={() => handleGenderFilter(gender)}
              />
            ))}
          </Filter>

          <Filter title="Status">
            {statuses.map((status) => (
              <FilterItem
                key={status}
                item={status}
                searchParam={statusSearch}
                onClick={() => handleStatusFilter(status)}
              />
            ))}
          </Filter>

          <Button variant="destructive" onClick={reset}>
            Reset
          </Button>
        </div>

        {isLoading ? (
          <Spinner />
        ) : error ? (
          <h2 className="text-center text-2xl font-semibold">
            Character is not found!
          </h2>
        ) : (
          <CharacterItems characters={data} />
        )}

        {!isLoading && !error && !search && !genderSearch && !statusSearch && (
          <PaginationItem paginationLength={42} href="character" />
        )}
      </div>
    </motion.section>
  );
};

export default Characters;
