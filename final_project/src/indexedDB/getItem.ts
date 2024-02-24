import { db } from "./db";

const getItem = async (id: number) => {
  const item = await db.addedProducts.get(id);
  return item ? true : false;
};

export default getItem;
