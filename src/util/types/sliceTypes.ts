export type IUuidV4 = string | number[];

export interface IUser {
  email: string;
  password: string;
  favorites: IUuidV4[];
  cart: IUuidV4[];
}

export interface IProduct {
  id: IUuidV4;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  shippingMethod: string;
}

export interface IMarketState {
  products: IProduct[];
  status: "idle" | "loading" | "failed";
  error: string | undefined;
}

export interface ILocation {
  latitude: number;
  longitude: number;
}