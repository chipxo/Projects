import { db } from "./db";
import updateTotPrice from "./updateTotPrice";

const decPrice = async (id: number, amount: number) => {
  try {
    const product = await db.addedProducts.get(id);

    if (product) {
      product.price = amount;
      product.count!--;

      await db.addedProducts.put(product);

      await updateTotPrice();
    }
  } catch (e) {
    console.log(`Error in decPrice: ${e}`);
  }
};

export default decPrice;
