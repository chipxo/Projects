"use client";

import { Suspense, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import CharacterItems from "@/components/character/CharacterItems";
import { cn, useClientFetch } from "@/lib/utils";
import PaginationItem from "@/components/PaginationItem";
import { useSearchParams, useRouter } from "next/navigation";
import { genders, statuses } from "@/constances";
import { Button } from "@/components/ui/button";
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

  const pushGender = `gender=${genderSearch}`;
  const pushName = `name=${search}`;
  const pushStatus = `status=${statusSearch}`;

  const handleInputChange = (val: string) => {
    setSearch(val);

    if (!statusSearch && !genderSearch) {
      router.push(`${BASE_URL}?name=${val}`);
      setQuery(`${BASE_URL}?name=${val}`);
    }

    if (val && genderSearch) {
      router.push(`${BASE_URL}?name=${val}&${pushGender}`);
      setQuery(`${BASE_URL}?name=${val}&${pushGender}`);
    }

    if (val && statusSearch) {
      router.push(`${BASE_URL}?name=${val}&${pushStatus}`);
      setQuery(`${BASE_URL}?name=${val}&${pushStatus}`);
    }

    if (val && genderSearch && statusSearch) {
      router.push(`${BASE_URL}?name=${val}&${pushGender}&${pushStatus}`);
      setQuery(`${BASE_URL}?name=${val}&${pushGender}&${pushStatus}`);
    }
  };

  const handleGenderFilter = (gender: Gender) => {
    if (!statusSearch && !search) {
      router.push(`${BASE_URL}?gender=${gender}`);
      setQuery(`${BASE_URL}?gender=${gender}`);
    }

    if (gender && statusSearch) {
      router.push(`${BASE_URL}?gender=${gender}&${pushStatus}`);
      setQuery(`${BASE_URL}?gender=${gender}&${pushStatus}`);
    }

    if (gender && search) {
      router.push(`${BASE_URL}?gender=${gender}&${pushName}`);
      setQuery(`${BASE_URL}?gender=${gender}&${pushName}`);
    }

    if (gender && statusSearch && search) {
      router.push(`${BASE_URL}?gender=${gender}&${pushStatus}&${pushName}`);
      setQuery(`${BASE_URL}?gender=${gender}&${pushStatus}&${pushName}`);
    }
  };

  const handleStatusFilter = (status: Status) => {
    if (!genderSearch && !search) {
      router.push(`${BASE_URL}?status=${status}`);
      setQuery(`${BASE_URL}?status=${status}`);
    }

    if (status && genderSearch) {
      router.push(`${BASE_URL}?status=${status}&${pushGender}`);
      setQuery(`${BASE_URL}?status=${status}&${pushGender}`);
    }

    if (status && search) {
      router.push(`${BASE_URL}?status=${status}&${pushName}`);
      setQuery(`${BASE_URL}?status=${status}&${pushName}`);
    }

    if (status && search && genderSearch) {
      router.push(`${BASE_URL}?status=${status}&${pushName}&${pushGender}`);
      setQuery(`${BASE_URL}?status=${status}&${pushName}&${pushGender}`);
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
    <section className="min-h-[85vh] bg-background/80">
      <div className="container rounded-b  py-4">
        <div className="mb-8 space-y-2">
          <h2 className="text-center text-2xl font-bold">Search</h2>

          <Input
            type="text"
            placeholder="Enter the charachter name"
            value={search}
            onChange={(e) => handleInputChange(e.target.value)}
          />
        </div>
        <div className="mb-4 flex gap-4">
          <p className="inline-flex h-[35px] items-center">Filter by </p>

          <Filter title="Genders">
            {genders.map((gender) => (
              <FilterItem
                key={gender}
                item={gender}
                searchParam={genderSearch}
                onClick={() => handleGenderFilter(gender)}
              />
            ))}
          </Filter>

          <Filter title="Statuses">
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

        {error && (
          <h2 className="text-center text-2xl font-semibold">
            Character is not found!
          </h2>
        )}

        {!error && (
          <Suspense fallback={<Spinner />}>
            <CharacterItems characters={data} />
          </Suspense>
        )}

        {!isLoading && !error && !search && !genderSearch && !statusSearch && (
          <div className="mt-4">
            <PaginationItem lenght={42} href="character" />
          </div>
        )}
      </div>
    </section>
  );
};

export default CharachtersPage;
