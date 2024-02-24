import { db } from "./db";

const updateTotPrice = async () => {
  try {
    const allProducts = await db.addedProducts.toArray();

    const total = allProducts.reduce((sum, product) => sum + product.price, 0);

    const totalPrice = await db.totalPrice.get(1);

    if (totalPrice) {
      totalPrice.totalPrice = total;

      await db.totalPrice.put(totalPrice);
    } else {
      await db.totalPrice.add({ id: 1, totalPrice: total });
    }
  } catch (e) {
    console.log(`Error in updateTotPrice: ${e}`);
  }
};

export default updateTotPrice;
