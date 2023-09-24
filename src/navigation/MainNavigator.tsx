import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomBar from "./BottomBar";
import AuthStack from "./AuthStack";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {

  //register or forgot password screens will be implemented later
  return (
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
          component={BottomBar}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default MainNavigator;
