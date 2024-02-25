import { db } from "./db";
import updateTotPrice from "./updateTotPrice";

type AddProductProps = {
  id: number;
  title: string;
  price: number;
  count?: number;
  image: string;
};

const addProduct = async ({
  id,
  title,
  price,
  count = 1,
  image,
}: AddProductProps) => {
  try {
    await db.addedProducts.add({
      id,
      title,
      price,
      count,
      image,
    });

    await updateTotPrice();
  } catch (e) {
    console.log(`Error in addProduct: ${e}`);
  }
};

export default addProduct;
