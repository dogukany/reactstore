import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PaperProvider } from "react-native-paper";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import MainNavigator from "./src/navigation/MainNavigator";
import store, { persistor } from "./src/redux/store";
export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <ReduxProvider store={store}>
          <PersistGate persistor={persistor}>
            <PaperProvider>
              <MainNavigator />
            </PaperProvider>
          </PersistGate>
        </ReduxProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
