import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SelectPlaces = () => (
  <div>
    <FontAwesomeIcon
      icon={faCheck}
      className="rounded-full border-4 border-red-400 px-1.5 py-1 text-red-400"
      size="2xl"
    />
    <p className="text-[36px]">SelectPlaces</p>
  </div>
);

export default SelectPlaces;
