import { AddedProductType } from "@/types/types";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const CartListItem: React.FC<AddedProductType> = ({ image, title, price }) => (
  <div className="flex items-center gap-x-8">
    <Avatar>
      <AvatarImage src={image} />
      <AvatarFallback>{title.slice(0, 1).toUpperCase()}</AvatarFallback>
    </Avatar>
    <div>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p>{price}$</p>
    </div>
  </div>
);

export default CartListItem;
