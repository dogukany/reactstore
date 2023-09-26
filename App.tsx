import MainNavigator from "./src/navigation/MainNavigator";
import { Provider as ReduxProvider } from "react-redux";
import store from "./src/redux/store";
import { PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <ReduxProvider store={store}>
      <PaperProvider>
        <MainNavigator />
      </PaperProvider>
    </ReduxProvider>
  );
}
