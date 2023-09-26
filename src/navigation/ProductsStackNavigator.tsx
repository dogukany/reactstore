import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SortProductsMenu from "../components/Product/SortProductsMenu";
import { Products } from "../screens";
import { ProductDetails } from "../screens/products";
import { IProduct } from "../util/types/sliceTypes";

export type ProductsStackParamList = {
  Products: undefined;
  ProductDetails: { product: IProduct } | undefined;
};

const Stack = createNativeStackNavigator<ProductsStackParamList>();

const ProductsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"Products"}
        component={Products}
        options={{
          headerRight: () => <SortProductsMenu />,
        }}
      />
      <Stack.Screen name={"ProductDetails"} component={ProductDetails} />
    </Stack.Navigator>
  );
};

export default ProductsStack;
