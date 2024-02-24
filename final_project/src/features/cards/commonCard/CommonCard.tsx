import { useAppDispatch } from "@/app/store";
import { cartDelete, cartIcon } from "@/components/common/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProductType } from "@/types/types";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addAmount, decreaseAmount } from "../../amount/amountSlice";
import addProduct from "@/indexedDB/addProduct";
import deleteProduct from "@/indexedDB/deleteProduct";
import getItem from "@/indexedDB/getItem";

type CardProps = ProductType & {
  isHome?: boolean;
  checked?: boolean;
};

const CommonCard: React.FC<CardProps> = ({
  id,
  title,
  images,
  category,
  price,
  isHome = false,
}) => {
  const dispatch = useAppDispatch();

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const checkItem = async () => {
      const item = await getItem(id);

      setChecked(item);
    };

    checkItem();
  }, []);

  const handleAddBtn = async (id: number, title: string, price: number) => {
    try {
      await addProduct({ id, title, price });

      dispatch(addAmount());
      setChecked(true);
    } catch (e) {
      console.log(`Error in addBtn: ${e}`);
    }
  };

  const handleDelBtn = async (id: number) => {
    try {
      await deleteProduct(id);

      dispatch(decreaseAmount());
      setChecked(false);
    } catch (e) {
      console.log(`Error in delBtn: ${e}`);
    }
  };

  return (
    <Card className="flex h-full w-full flex-col">
      {/* Image */}
      <Link to={`/products/${id}`}>
        <img
          src={images?.[0]}
          className="w-full cursor-pointer rounded-t-md object-cover"
          alt={title}
        />
      </Link>
      <CardHeader>
        {!isHome && (
          <Badge variant="outline" className="mb-2 w-fit">
            <p>{category?.name}</p>
          </Badge>
        )}
        <Link to={`/products/${id}`}>
          <CardTitle className="mb-2 font-thin leading-6">{title}</CardTitle>
        </Link>
        {isHome && (
          <CardDescription className="text-xl">{`$${price}`}</CardDescription>
        )}
      </CardHeader>
      {!isHome && (
        <div className="flex flex-grow flex-col justify-between">
          <CardContent className="text-2xl">
            <p>${price}</p>
          </CardContent>
          <CardFooter className="space-x-4">
            <Button
              onClick={() => handleDelBtn(id)}
              disabled={!checked}
              variant="destructive"
            >
              {cartDelete}
            </Button>
            <Button
              onClick={() => handleAddBtn(id, title, price)}
              disabled={checked}
              variant="outline"
            >
              {cartIcon}
            </Button>
          </CardFooter>
        </div>
      )}
    </Card>
  );
};

export default CommonCard;
