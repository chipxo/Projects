import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ProductType } from "@/types/types";
import { Link } from "react-router-dom";

const SearchPageItems: React.FC<ProductType> = ({
  id,
  images,
  title,
  category,
}) => {
  return (
    <Link to={`/products/${id}`}>
      <div className="grid grid-cols-[0.1fr_1fr] items-center gap-x-4">
        <Avatar>
          <AvatarImage src={images?.[0]} />
          <AvatarFallback>{title.slice(0, 1)}</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h2 className="md:text-md text-sm">{title}</h2>
          <p>
            in category:{" "}
            <span className="text-md md:tracking-widest">{category.name}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SearchPageItems;
