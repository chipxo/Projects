import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import defaultLocationImage from "@public/rick-and-morty-dimension.jpg";

const LocationItem = ({ name, type, dimension }: LocationType) => {
  return (
    <div className="my-2 grid rounded-md bg-accent/60 p-2">
      <Dialog>
        <DialogTrigger className="w-full text-start">
          <div className="grid gap-4 sm:grid-cols-[0.4fr,_1fr]">
            <Image
              src={defaultLocationImage}
              alt={"default location image"}
              className="h-full rounded-md object-cover"
            />

            <div className="flex flex-col p-2">
              <p className="font-bold lg:text-2xl">{name}</p>
              <p className="mt-4">Type: {type}</p>
              <p className="mt-4">Dimension: {dimension}</p>
            </div>
          </div>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader className="grid p-2 sm:grid-cols-2">
            <div className="p-4">
              <DialogTitle>
                <h2 className="text-lg md:text-2xl">{name}</h2>
              </DialogTitle>

              <DialogDescription>
                <p className="my-2">Type: {type}</p>
                <p className="my-2">Dimension: {dimension}</p>
              </DialogDescription>
            </div>

            <div className="pt-1 max-sm:order-[-1]">
              <Image
                src={defaultLocationImage}
                alt={"default location image"}
                className="rounded-md"
              />
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LocationItem;
