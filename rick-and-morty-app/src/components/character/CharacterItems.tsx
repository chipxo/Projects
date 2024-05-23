import React from "react";
import CharacterItem from "./CharacterItem";

type CharacterItemsProps = {
  characters: Character[];
};

const CharacterItems = ({ characters }: CharacterItemsProps) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] gap-4 ">
      {characters?.map((character) => (
        <CharacterItem key={character.id} {...character} />
      ))}
    </div>
  );
};

export default CharacterItems;
