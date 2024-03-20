import Container from "@/components/ui/container";
import SearchPlaces from "./SearchPlaces";
import SelectPlaces from "./SelectPlaces";
import Book from "./Book";

const Steps = () => (
  <section className="bg-gray-600 pb-8 pt-20 text-white">
    <Container className="flex justify-evenly *:grid *:place-items-center *:gap-1 max-md:flex-col max-md:gap-8">
      <SearchPlaces />

      <SelectPlaces />

      <Book />
    </Container>
  </section>
);

export default Steps;
