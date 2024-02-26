declare type CategoryType = {
  id: number;
  name: string;
  image: string;
};

declare type ProductType = {
  id: number;
  title: string;
  price: number;
  description?: string;
  category: CategoryType;
  images: string[];
};

declare type CategoriesType = {
  id: number;
  name: string;
  image: string;
};

declare type User = Record<string, string | number>;

declare type AddedProductType = {
  id: number;
  title: string;
  price: number;
  count?: number;
  image: string;
};

declare type TotalPriceType = {
  id: number;
  totalPrice: number | null;
};

interface Dispatch<A extends Action = UnknownAction> {
  <T extends A>(action: T, ...extraArgs: any[]): T;
}

declare type AuthType = {
  name?: string;
  email: string;
  password: string;
  dispatch: Dispatch;
};
