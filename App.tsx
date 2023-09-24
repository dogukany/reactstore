import MainNavigator from "./src/navigation/MainNavigator";
import { Provider as ReduxProvider } from "react-redux";
import store from "./src/redux/store";

export default function App() {
  return (
    <ReduxProvider store={store}>
      <MainNavigator />
    </ReduxProvider>
  );
}
