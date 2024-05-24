"use client";

import { Suspense, useEffect, useState } from "react";
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

const CharachtersPage = () => {
  const BASE_URL = "character";

  const [search, setSearch] = useState("");
  const [query, setQuery] = useState(BASE_URL);

  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page");
  const genderSearch = searchParams.get("gender");
  const statusSearch = searchParams.get("status");

  const genderParams = `gender=${genderSearch}`;
  const nameParams = `name=${search}`;
  const statusParams = `status=${statusSearch}`;

  const handleInputChange = (val: string) => {
    setSearch(val);

    if (!statusSearch && !genderSearch) {
      router.push(`${BASE_URL}?name=${val}`);
      setQuery(`${BASE_URL}?name=${val}`);
    }

    if (val && genderSearch) {
      router.push(`${BASE_URL}?name=${val}&${genderParams}`);
      setQuery(`${BASE_URL}?name=${val}&${genderParams}`);
    }

    if (val && statusSearch) {
      router.push(`${BASE_URL}?name=${val}&${statusParams}`);
      setQuery(`${BASE_URL}?name=${val}&${statusParams}`);
    }

    if (val && genderSearch && statusSearch) {
      router.push(`${BASE_URL}?name=${val}&${genderParams}&${statusParams}`);
      setQuery(`${BASE_URL}?name=${val}&${genderParams}&${statusParams}`);
    }
  };

  const handleGenderFilter = (gender: Gender) => {
    if (!statusSearch && !search) {
      router.push(`${BASE_URL}?gender=${gender}`);
      setQuery(`${BASE_URL}?gender=${gender}`);
    }

    if (gender && statusSearch) {
      router.push(`${BASE_URL}?gender=${gender}&${statusParams}`);
      setQuery(`${BASE_URL}?gender=${gender}&${statusParams}`);
    }

    if (gender && search) {
      router.push(`${BASE_URL}?gender=${gender}&${nameParams}`);
      setQuery(`${BASE_URL}?gender=${gender}&${nameParams}`);
    }

    if (gender && statusSearch && search) {
      router.push(`${BASE_URL}?gender=${gender}&${statusParams}&${nameParams}`);
      setQuery(`${BASE_URL}?gender=${gender}&${statusParams}&${nameParams}`);
    }
  };

  const handleStatusFilter = (status: Status) => {
    if (!genderSearch && !search) {
      router.push(`${BASE_URL}?status=${status}`);
      setQuery(`${BASE_URL}?status=${status}`);
    }

    if (status && genderSearch) {
      router.push(`${BASE_URL}?status=${status}&${genderParams}`);
      setQuery(`${BASE_URL}?status=${status}&${genderParams}`);
    }

    if (status && search) {
      router.push(`${BASE_URL}?status=${status}&${nameParams}`);
      setQuery(`${BASE_URL}?status=${status}&${nameParams}`);
    }

    if (status && search && genderSearch) {
      router.push(`${BASE_URL}?status=${status}&${nameParams}&${genderParams}`);
      setQuery(`${BASE_URL}?status=${status}&${nameParams}&${genderParams}`);
    }
  };

  const reset = () => {
    router.push(BASE_URL);
    setQuery(BASE_URL);
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
            placeholder="Enter the charachter name"
            className="bg-background/80"
            value={search}
            onChange={(e) => handleInputChange(e.target.value)}
          />
        </div>
        <div className="mb-4 flex gap-4 max-sm:flex-col">
          <p className="inline-flex h-[35px] items-center">Filter by</p>

          <Suspense fallback={<Spinner />}>
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
          </Suspense>

          <Button variant="destructive" onClick={reset}>
            Reset
          </Button>
        </div>

        {isLoading ? <Spinner /> : <CharacterItems characters={data} />}

        {error && (
          <h2 className="text-center text-2xl font-semibold">
            Character is not found!
          </h2>
        )}

        {!isLoading && !error && !search && !genderSearch && !statusSearch && (
          <PaginationItem paginationLength={42} href="character" />
        )}
      </div>
    </motion.section>
  );
};

export default CharachtersPage;
