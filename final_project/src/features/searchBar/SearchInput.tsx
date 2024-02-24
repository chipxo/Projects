import { RootState } from "@/app/rootReducer";
import { Input } from "@/components/ui/input";
import React from "react";
import { useSelector } from "react-redux";

type SearchInputProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
};

const SearchInput: React.FC<SearchInputProps> = ({
  onChange,
  onFocus,
  onBlur,
}) => {
  const { inputValue } = useSelector(
    (state: RootState) => state.searchProducts,
  );

  return (
    <Input
      type="text"
      name="search"
      placeholder="Search..."
      className="relative z-[200] w-full bg-background"
      value={inputValue}
      onChange={(e) => onChange(e)}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

export default SearchInput;
