import React, { useCallback } from "react";
import { View } from "react-native";
import { RootStack } from "./navigation/RootStack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

function App() {
  const [fontsLoaded] = useFonts({
    "PermanentMarker-Regular": require("./assets/fonts/CarterOne-Regular.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <RootStack />
    </View>
  );
}

export default App;
