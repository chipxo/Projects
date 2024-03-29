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
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addAmount, decreaseAmount } from "@/features/amount/amountSlice";
import addProduct from "@/indexedDB/addProduct";
import deleteProduct from "@/indexedDB/deleteProduct";
import getItem from "@/indexedDB/getItem";
import { twJoin } from "tailwind-merge";

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

  const navigate = useNavigate();

  useEffect(() => {
    const checkItem = async () => {
      const item = await getItem(id);

      setChecked(item);
    };

    checkItem();
  }, []);

  const handleAddBtn = async (
    id: number,
    title: string,
    price: number,
    image: string,
  ) => {
    try {
      dispatch(addAmount());
      setChecked(true);

      await addProduct({ id, title, price, image });
    } catch (e) {
      console.log(`Error in addBtn: ${e}`);
    }
  };

  const handleDelBtn = async (id: number) => {
    try {
      dispatch(decreaseAmount());
      setChecked(false);

      await deleteProduct(id);
    } catch (e) {
      console.log(`Error in delBtn: ${e}`);
    }
  };

  return (
    <Card className="flex h-full min-h-[428px] w-full flex-col">
      {/* Image */}

      <img
        onClick={() => navigate(`/products/${id}`)}
        src={images?.[0]}
        className="h-[335px] w-full cursor-pointer rounded-t-md border-b object-cover"
        alt={title}
      />

      <CardHeader
        className={twJoin("justify-between", isHome ? "flex-grow" : null)}
      >
        {!isHome && (
          <Badge variant="outline" className="mb-2 w-fit">
            <p>{category?.name}</p>
          </Badge>
        )}

        <Link to={`/products/${id}`}>
          <CardTitle className="mb-2 font-thin leading-6">{title}</CardTitle>
        </Link>

        {isHome && (
          <CardDescription className="text-xl">${price}</CardDescription>
        )}
      </CardHeader>

      {!isHome && (
        <div className="mt-auto flex flex-col justify-between">
          <CardContent className="text-2xl md:py-0">
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
              onClick={() => handleAddBtn(id, title, price, images?.[0])}
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
