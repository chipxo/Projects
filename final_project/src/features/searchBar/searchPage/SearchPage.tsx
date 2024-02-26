import { RootState } from "@/app/rootReducer.tsx";
import ErrorMessage from "@/components/common/ErrorMessage";
import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { useSelector } from "react-redux";
import SearchPageItems from "./SearchPageItems";
import SearchItemsSkeleton from "./SearchItemsSkeleton";

type SearchPageProps = {
  searchResults: ProductType[] | undefined;
};

const SearchPage: React.FC<SearchPageProps> = ({ searchResults }) => {
  const { inputValue, loading, error } = useSelector(
    (state: RootState) => state.searchProducts,
  );

  return (
    <>
      {searchResults && (
        <div className="grid max-h-[50vh] w-full gap-y-4 overflow-auto rounded-md border bg-background p-4">
          {loading &&
            "qwe".split("").map((_) => <SearchItemsSkeleton key={nanoid()} />)}

          {error && <ErrorMessage error={error} />}

          {!error && !loading && !!inputValue.length && !!searchResults.length
            ? searchResults.map((result) => (
                <SearchPageItems key={nanoid()} {...result} />
              ))
            : !loading &&
              !error && <h2 className="text-sm md:text-lg">Nothing Found!</h2>}
        </div>
      )}
    </>
  );
};

export default SearchPage;
