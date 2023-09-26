import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type MainNavigatorParamsList = {
  Auth: undefined;
  Main: undefined;
};

export type MainNavigatorProp =
  NativeStackNavigationProp<MainNavigatorParamsList>;
