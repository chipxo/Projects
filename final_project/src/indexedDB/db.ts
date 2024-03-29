import Dexie, { Table } from "dexie";

export class Vivo extends Dexie {
  addedProducts!: Table<AddedProductType>;
  totalPrice!: Table<TotalPriceType>;

  constructor() {
    super("Vivo");
    this.version(1).stores({
      addedProducts: "id, title, price, count, image",
      totalPrice: "id, totalPrice",
    });
  }
}

export const db = new Vivo();
