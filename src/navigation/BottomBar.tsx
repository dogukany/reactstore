import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Cart, Favorites } from "../screens";
import { routes } from "../util/constants/routes";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ProductsStack from "./ProductsStack";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={routes.Home}
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.ProductsStack}
        component={ProductsStack}
        options={{
          title: "Products",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="store" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.Favorites}
        component={Favorites}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.Cart}
        component={Cart}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
