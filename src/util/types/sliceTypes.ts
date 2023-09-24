export interface IUser {
  email: string;
  password: string;
  favorites: IProduct[];
  cart: IProduct[];
}

export interface IProduct {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  shippingMethod: string;
}

export interface IMarketState {
  products: IProduct[];
  status: "idle" | "loading" | "failed"
  error: string | undefined;
}

export interface ICart {
  product: IProduct;
  quantity: number;
}