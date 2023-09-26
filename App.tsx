import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PaperProvider } from "react-native-paper";
import { Provider as ReduxProvider } from "react-redux";
import MainNavigator from "./src/navigation/MainNavigator";
import store from "./src/redux/store";
export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <ReduxProvider store={store}>
          <PaperProvider>
            <MainNavigator />
          </PaperProvider>
        </ReduxProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
