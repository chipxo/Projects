import React from "react";
import CharacterItem from "./CharacterItem";
import { AnimatePresence, motion } from "framer-motion";

type CharacterItemsProps = {
  characters: Character[];
};

const CharacterItems = ({ characters }: CharacterItemsProps) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-4"
      >
        {characters?.map((character) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={character.id}
          >
            <CharacterItem {...character} />
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default CharacterItems;
