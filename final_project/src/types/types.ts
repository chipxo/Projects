type CategoryType = {
  id: number;
  name: string;
  image: string;
};

export type ProductType = {
  id: number;
  title: string;
  price: number;
  description?: string;
  category: CategoryType;
  images: string[];
};

export type CategoriesType = {
  id: number;
  name: string;
  image: string;
};

export type User = Record<string, string | number>;

export type AddedProductType = {
  id: number;
  title: string;
  price: number;
  count: number;
};

export type TotalPriceType = {
  id: number;
  totalPrice: number | null;
};
