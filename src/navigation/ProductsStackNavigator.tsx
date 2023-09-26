import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Products } from "../screens";
import SortProductsMenu from "../components/Product/SortProductsMenu";

const Stack = createNativeStackNavigator();

const ProductsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Products"
        component={Products}
        options={{
          headerRight: () => <SortProductsMenu />,
        }}
      />
    </Stack.Navigator>
  );
};

export default ProductsStack;
