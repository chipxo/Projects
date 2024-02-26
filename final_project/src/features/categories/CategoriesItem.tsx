import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import { Link } from "react-router-dom";

const CategoriesItem: React.FC<CategoriesType> = ({ id, image, name }) => (
  <Link to={`/products/categories/${id}`}>
    <div className="grid grid-cols-[60px_1fr] items-center gap-x-2">
      <Avatar>
        <AvatarImage src={image} />
        <AvatarFallback>{name.slice(0, 1)}</AvatarFallback>
      </Avatar>

      <p className="text-lg">{name}</p>
    </div>
  </Link>
);

export default CategoriesItem;
