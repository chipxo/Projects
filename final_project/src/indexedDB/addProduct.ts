import { db } from "./db";
import updateTotPrice from "./updateTotPrice";

type AddProductProps = {
  id: number;
  title: string;
  price: number;
  count?: number;
};

const addProduct = async ({ id, title, price, count = 1 }: AddProductProps) => {
  try {
    await db.addedProducts.add({
      id,
      title,
      price,
      count,
    });

    await updateTotPrice();
  } catch (e) {
    console.log(`Error in addProduct: ${e}`);
  }
};

export default addProduct;
