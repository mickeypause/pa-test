import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store, { persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import RootNavigation from "./navigation/RootNavigation";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
        <ExpoStatusBar style="auto" />
      </PersistGate>
    </Provider>
  );
}
