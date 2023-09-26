import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import type { MainNavigatorParamsList } from "../util/types/navigationTypes";
import AuthStack from "./AuthStackNavigator";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createNativeStackNavigator<MainNavigatorParamsList>();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Group key={"Auth"}>
          <Stack.Screen
            name="Auth"
            component={AuthStack}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Group>

        <Stack.Group key={"MainNavigator"}>
          <Stack.Screen
            name="Main"
            component={BottomTabNavigator}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
