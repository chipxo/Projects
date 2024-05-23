"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const EpisodeCharactersItem = ({
  episodeCharacters,
}: {
  episodeCharacters: Character[];
}) => {
  const [showAllCharacters, setShowAllCharacters] = useState(false);

  return (
    <div>
      <div>
        {!showAllCharacters &&
          episodeCharacters.map(
            ({ id, name }, i: number) =>
              i < 3 && (
                <span key={id} className="">
                  {name}
                  {i < 2 && ", "}
                </span>
              ),
          )}
      </div>

      <div>
        {episodeCharacters.map(
          ({ id, name }, i: number) =>
            showAllCharacters && (
              <span key={id}>
                {name}
                {i === episodeCharacters.length - 1 ? "" : ", "}
              </span>
            ),
        )}
      </div>

      <Button
        onClick={() => setShowAllCharacters((prev) => !prev)}
        className="mt-6"
      >
        {showAllCharacters ? "Close" : "Show all"}
      </Button>
    </div>
  );
};

export default EpisodeCharactersItem;
