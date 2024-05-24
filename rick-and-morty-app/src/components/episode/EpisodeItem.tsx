import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useFetch } from "@/lib/utils";
import EpisodeCharacterItem from "./EpisodeCharactersItem";
import EpisodeImage from "./EpisodeImage";

const EpisodeItem = async ({
  name,
  air_date,
  characters,
  episode,
}: Episode) => {
  const charactersUrls = characters.map((url) => {
    const parts = url.split("/");
    return parseInt(parts[parts.length - 1]);
  });

  const episodeCharacters = await useFetch(`character/${charactersUrls}`);

  return (
    <div className="my-2 grid rounded-md border bg-accent/80 sm:p-2 ">
      <Dialog>
        <DialogTrigger className="w-full text-start">
          <div className="grid gap-4 sm:grid-cols-[0.4fr,_1fr]">
            <EpisodeImage episode={episode} />

            <div className="flex flex-col p-2">
              <p className="font-bold lg:text-2xl">{name}</p>
              <p className="mt-4">Air date: {air_date}</p>
            </div>
          </div>
        </DialogTrigger>

        <DialogContent>
          <div className="grid p-2 sm:grid-cols-2">
            <DialogHeader className="p-4">
              <DialogTitle className="text-2xl">{name}</DialogTitle>

              <DialogDescription>
                <p className="my-2">Air date: {air_date}</p>
                <p className="my-2">Featured characters:</p>

                <EpisodeCharacterItem episodeCharacters={episodeCharacters} />
              </DialogDescription>
            </DialogHeader>

            <div className="pt-2 max-sm:order-[-1]">
              <EpisodeImage episode={episode} />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EpisodeItem;
