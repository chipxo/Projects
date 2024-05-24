import Spinner from "@/components/Spinner";
import React, { Suspense } from "react";
import Characters from "@/components/character/Characters";

const CharactersPage = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Characters />
    </Suspense>
  );
};

export default CharactersPage;
