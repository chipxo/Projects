import { cartDelete } from "@/components/common/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProductType } from "@/types/types";
import React, { memo } from "react";
import { Link } from "react-router-dom";
import incPrice from "@/indexedDB/incPrice";
import decPrice from "@/indexedDB/decPrice";
import deleteProduct from "@/indexedDB/deleteProduct";
import { db } from "@/indexedDB/db";
import { useLiveQuery } from "dexie-react-hooks";

const BuyCard: React.FC<ProductType> = memo(
  ({ id, images, price: prodPrice, title }) => {
    const defaultValues = {
      price: prodPrice,
      count: 1,
    };

    const { price, count } =
      useLiveQuery(() => db.addedProducts.get(id)) || defaultValues;

    const incCount = async () => {
      try {
        await incPrice(id, prodPrice * (count + 1));
      } catch (e) {
        console.log(`Error in incCount: ${e}`);
      }
    };

    const decrCount = async () => {
      try {
        await decPrice(id, prodPrice * (count - 1));
      } catch (e) {
        console.log(`Error in decrCount: ${e}`);
      }
    };

    const deleteItem = async () => {
      try {
        await deleteProduct(id);
      } catch (e) {
        console.log(`Error in deleteItem: ${e}`);
      }
    };

    return (
      <Card
        key={id}
        className="grid min-h-[280px] w-full grid-cols-[0.33fr_1fr] items-center gap-1 md:grid-cols-[0.3fr_1fr] md:gap-2"
      >
        <CardHeader className="h-full pr-0">
          <img
            src={images?.[1]}
            alt={title}
            className="h-full w-full rounded-md object-cover md:block"
          />
          <Avatar className="hidden">
            <AvatarImage src={images?.[1]} />
            <AvatarFallback />
          </Avatar>
        </CardHeader>

        <div>
          <CardHeader className="max-md:mb-2">
            <Link to={`/products/${id}`}>
              <CardTitle>{title}</CardTitle>
            </Link>
          </CardHeader>

          <CardContent>
            {!!price && (
              <p className="h-[40px] w-[80px] text-lg md:text-2xl">{price}$</p>
            )}
          </CardContent>

          <CardFooter>
            <div className="min-w-1/2 grid grid-cols-[1fr_0.7fr] md:grid-cols-2 md:gap-8">
              <div className="grid grid-cols-3 justify-items-center gap-3 sm:pr-4 md:border-r">
                <Button variant="ghost" className="text-xl" onClick={incCount}>
                  +
                </Button>

                <Button
                  variant="outline"
                  className="cursor-default hover:bg-background"
                >
                  {count || 1}
                </Button>

                <Button
                  onClick={decrCount}
                  variant="ghost"
                  className="text-xl"
                  disabled={count === 1}
                >
                  -
                </Button>
              </div>

              <div className="w-fit max-sm:justify-self-end">
                <Button onClick={deleteItem}>{cartDelete}</Button>
              </div>
            </div>
          </CardFooter>
        </div>
      </Card>
    );
  },
);

export default BuyCard;
