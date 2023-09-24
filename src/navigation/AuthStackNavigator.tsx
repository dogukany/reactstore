import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { routes } from "../util/constants/routes";

import { Login } from "../screens";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.Login} component={Login} />
    </Stack.Navigator>
  );
};

export default AuthStack;