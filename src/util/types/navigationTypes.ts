import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { IProduct } from "./sliceTypes";

export type ProductsStackParamList = {
  Products: undefined;
  ProductDetails: { product: IProduct } | undefined;
};
export type ProductStackNavigatorProp =
  NativeStackNavigationProp<ProductsStackParamList>;

export type MainNavigatorParamsList = {
  Auth: undefined;
  Main: undefined;
};

export type MainNavigatorProp =
  NativeStackNavigationProp<MainNavigatorParamsList>;
