import { db } from "./db";
import updateTotPrice from "./updateTotPrice";

const deleteProduct = async (id: number) => {
  try {
    await db.addedProducts.delete(id);

    await updateTotPrice();
  } catch (e) {
    console.log(`Error in deleteProduct: ${e}`);
  }
};

export default deleteProduct;
