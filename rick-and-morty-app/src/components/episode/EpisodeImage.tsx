import { formatEpisode } from "@/lib/utils";
import Image from "next/image";
import defaultImage from "@public/ricka-and-morty-episode-img.jpg";

type EpisodeImageProps = {
  episode: string;
};

const EpisodeImage = ({ episode }: EpisodeImageProps) => {
  return (
    <div className="relative flex max-h-[190px] gap-4 self-center overflow-hidden rounded-sm p-2">
      <Image
        src={defaultImage}
        alt={"defaultImage"}
        className="my-auto h-full object-cover blur-md"
      />

      <p className="absolute inset-0 flex items-center justify-center font-semibold text-white md:text-lg">
        {formatEpisode(episode)}
      </p>
    </div>
  );
};

export default EpisodeImage;
