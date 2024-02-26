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
import { nanoid } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addAmount, decreaseAmount } from "@/features/amount/amountSlice";
import getItem from "@/indexedDB/getItem";
import addProduct from "@/indexedDB/addProduct";
import deleteProduct from "@/indexedDB/deleteProduct";

type SingleCardType = ProductType & {
  handleGalleryClick?: () => void;
};

const SingleCard: React.FC<SingleCardType> = ({
  id,
  title,
  price,
  description,
  category,
  images,
  handleGalleryClick,
}) => {
  const dispatch = useAppDispatch();

  const [checked, setChecked] = useState(false);

  const { prodId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);

    const checkItem = async () => {
      try {
        const item = await getItem(Number(prodId) || id);

        setChecked(item);
      } catch (e) {
        console.log(`Error in useEffect: ${e}`);
      }
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
      console.log(`Error in handleAddBtn: ${e}`);
    }
  };

  const handleDelBtn = async (id: number) => {
    try {
      dispatch(decreaseAmount());
      setChecked(false);

      await deleteProduct(id);
    } catch (e) {
      console.log(`Error in handleDelBtn: ${e}`);
    }
  };

  return (
    <Card className="grid max-sm:min-h-[768px] sm:min-h-[374px] md:grid-cols-[0.4fr_1fr] xl:grid-cols-[0.25fr_1fr]">
      <CardHeader className="grid place-items-center md:pr-0">
        <div className="hidden h-full gap-2 rounded-md pt-3 lg:grid">
          <img
            onClick={handleGalleryClick}
            src={images?.[0]}
            className="h-full cursor-pointer rounded-md object-cover shadow-lg"
          />

          <div className="grid grid-cols-3 gap-3 border-t pt-2">
            {images?.map((src: string) => (
              <img
                key={nanoid()}
                onClick={handleGalleryClick}
                className="cursor-pointer rounded-md shadow-lg"
                src={src}
                alt={title}
              />
            ))}
          </div>
        </div>
        <img
          onClick={handleGalleryClick}
          className="h-full w-full cursor-pointer rounded-md object-cover lg:hidden"
          src={images?.[0]}
          alt={title}
        />
      </CardHeader>

      <div className="grid">
        <CardHeader>
          <Badge variant="secondary" className="mb-3 w-fit">
            {category?.name}
          </Badge>

          <CardTitle>{title}</CardTitle>

          <CardDescription>{description}</CardDescription>
        </CardHeader>

        <CardContent className="mt-auto">
          <div>
            Price: <br />
            <p className="mt-2 text-3xl text-primary">{price}$</p>
          </div>
        </CardContent>

        <CardFooter className="self-end">
          <Button
            variant="outline"
            disabled={checked}
            onClick={() => handleAddBtn(id, title, price, images?.[0])}
            className="mr-4"
          >
            {cartIcon}
          </Button>

          <Button disabled={!checked} onClick={() => handleDelBtn(id)}>
            {cartDelete}
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default SingleCard;
