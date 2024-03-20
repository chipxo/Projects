import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Book = () => (
  <div>
    <FontAwesomeIcon icon={faThumbsUp} className="text-sky-400" size="3x" />

    <p className="text-[36px]">Book & Enjoy</p>
  </div>
);

export default Book;
