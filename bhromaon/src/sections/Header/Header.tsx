import Title from "@/components/ui/title";
import HeaderBg from "./HeaderBg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => (
  <header className="h-screen">
    <HeaderBg />

    <div className="container grid h-full items-center sm:max-lg:px-8 ">
      <div>
        <Title className="text-center text-3xl">BHROMAON</Title>
        <p className="my-2 text-center text-white">Safe Travel Anywhere</p>
        <div className="relative mx-auto lg:w-2/4">
          <Input
            placeholder="Search Your Travel Destination"
            className="rounded-none bg-white py-6"
          />
          <Button
            className="absolute right-1 top-1 h-[84%] items-center gap-2 rounded-none bg-primary uppercase"
            size={window.innerWidth > 768 ? "lg" : "sm"}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            Search
          </Button>
        </div>
      </div>
    </div>
    <a
      href="#"
      className="absolute bottom-1/4 left-1/2 inline-flex -translate-x-1/2 flex-col text-white"
    >
      Scroll down
      <FontAwesomeIcon icon={faChevronDown} />
    </a>
  </header>
);

export default Header;
