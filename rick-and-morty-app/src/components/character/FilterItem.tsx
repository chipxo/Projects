import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

type FilterItemProps = {
  item: Gender | Status;
  onClick: () => void;
  searchParam: string | null;
};

const FilterItem = ({ item, searchParam, onClick }: FilterItemProps) => {
  return (
    <Button
      variant={searchParam === item ? "default" : "ghost"}
      onClick={onClick}
      className="w-full justify-start"
    >
      {item}
    </Button>
  );
};

export default FilterItem;
