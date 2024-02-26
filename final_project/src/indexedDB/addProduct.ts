import { db } from "./db";
import updateTotPrice from "./updateTotPrice";

const addProduct = async ({
  id,
  title,
  price,
  count = 1,
  image,
}: AddedProductType) => {
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
