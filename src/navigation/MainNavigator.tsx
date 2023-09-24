import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import BottomTabNavigator from "./BottomTabNavigator";
import AuthStack from "./AuthStackNavigator";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  //register or forgot password screens will be implemented later
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Group key={"Auth"}>
          <Stack.Screen
            name="Auth"
            component={AuthStack}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Group>

        <Stack.Group key={"Main"}>
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
