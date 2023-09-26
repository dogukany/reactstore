import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SortProductsMenu from "../components/Product/SortProductsMenu";
import { Products } from "../screens";
import { ProductDetails } from "../screens/products";
import type { ProductsStackParamList } from "../util/types/navigationTypes";


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
      <Stack.Screen
        name={"ProductDetails"}
        component={ProductDetails}
        options={{
          title: "Product Details",
        }}
      />
    </Stack.Navigator>
  );
};

export default ProductsStack;
