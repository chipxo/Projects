import { RootState } from "@/app/rootReducer";
import { useAppDispatch } from "@/app/store";
import { Button } from "@/components/ui/button";
import { fetchSearchProducts } from "@/hooks/fetchSearch";
import { mOpacity } from "@/utils/motionSettings";
import { motion as m } from "framer-motion";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SearchBtn = () => {
  const dispatch = useAppDispatch();

  const { inputValue } = useSelector(
    (state: RootState) => state.searchProducts,
  );

  const handleClick = () => {
    dispatch(fetchSearchProducts(inputValue));
  };

  return (
    <m.div
      onClick={handleClick}
      {...mOpacity}
      className="absolute right-0 top-0 z-[200] scale-75"
    >
      <Link to="/searchResults">
        <Button variant="default">Search</Button>
      </Link>
    </m.div>
  );
};

export default SearchBtn;
