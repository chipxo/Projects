"use client";

import { useState } from "react";
import { Button } from "../ui/button";

type EpisodeCharactersItemProps = {
  episodeCharacters: Character[];
};

const EpisodeCharactersItem = ({
  episodeCharacters,
}: EpisodeCharactersItemProps) => {
  const [showAllCharacters, setShowAllCharacters] = useState(false);

  return (
    <div>
      {episodeCharacters?.map(({ id, name }, i) =>
        showAllCharacters ? (
          <span key={id}>
            {name}
            {i === episodeCharacters.length - 1 ? "" : ", "}
          </span>
        ) : (
          i < 3 && (
            <span key={id}>
              {name}
              {i < 2 && ", "}
            </span>
          )
        ),
      )}

      <Button
        onClick={() => setShowAllCharacters((prev) => !prev)}
        className="mt-3 md:mt-6"
      >
        {showAllCharacters ? "Close" : "Show all"}
      </Button>
    </div>
  );
};

export default EpisodeCharactersItem;
