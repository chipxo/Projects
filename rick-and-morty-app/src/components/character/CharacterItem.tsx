import Image from "next/image";

const CharacterItem = ({
  name,
  image,
  gender,
  status,
  species,
  type,
  origin,
  location,
}: Character) => {
  return (
    <div className="grid grid-cols-[0.4fr,_1fr] place-items-center gap-4 rounded-md bg-secondary/30 p-2">
      <Image
        src={image}
        alt={"character image"}
        width={130}
        height={130}
        className="rounded-full"
      />

      <div className="w-full text-start">
        <p>{name}</p>
        <p>Gender: {gender}</p>
        <p>Status: {status}</p>
        <p>Species: {species}</p>
        <p>Origin: {origin.name}</p>
        <p>Location: {location.name}</p>
        {type && <p>Type: {type}</p>}
      </div>
    </div>
  );
};

export default CharacterItem;
