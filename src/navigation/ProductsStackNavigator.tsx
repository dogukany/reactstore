import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Products } from "../screens";

const Stack = createNativeStackNavigator();

const ProductsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Products" component={Products} options={{
        headerShown:false
      }} />
    </Stack.Navigator>
  );
};

export default ProductsStack;