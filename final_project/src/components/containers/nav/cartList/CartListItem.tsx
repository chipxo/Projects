import { ProductType } from "@/types/types";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const CartListItem: React.FC<ProductType> = ({ images, title, price }) => {
  return (
    <div className="flex items-center gap-x-8">
      <Avatar>
        <AvatarImage src={images?.[0]} />
        <AvatarFallback>{title.slice(0, 1).toUpperCase()}</AvatarFallback>
      </Avatar>
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p>{price}$</p>
      </div>
    </div>
  );
};

export default CartListItem;
