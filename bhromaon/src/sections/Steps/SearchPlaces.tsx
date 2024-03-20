import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchPlaces = () => (
  <div>
    <FontAwesomeIcon
      icon={faMagnifyingGlass}
      className="text-blue-500"
      size="3x"
    />
    <p className="text-[36px]">Seatch Places</p>
  </div>
);

export default SearchPlaces;
