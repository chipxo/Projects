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
    <div className="grid h-full rounded-md bg-gradient-to-tr from-primary/60 to-secondary/60 p-2 text-white">
      <h2 className="text-center text-xl">{name}</h2>

      <div className="grid grid-cols-[1fr,_0.4fr] place-items-center gap-4">
        <div className="w-full text-start">
          <p>Gender: {gender}</p>
          <p>Status: {status}</p>
          <p>Species: {species}</p>
          <p>Origin: {origin.name}</p>
          <p>Location: {location.name}</p>
          {type && <p>Type: {type}</p>}
        </div>

        <Image
          src={image}
          alt={"character image"}
          width={130}
          height={130}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default CharacterItem;
