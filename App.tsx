import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback } from 'react';
import { SafeAreaView } from 'react-native';

import { RootStack } from './navigation/RootStack';
import colors from './theme/colors';

function App() {
  const [fontsLoaded] = useFonts({
    'PermanentMarker-Regular': require('./assets/fonts/CarterOne-Regular.ttf'),
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
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.blue[500] }}
      onLayout={onLayoutRootView}>
      <RootStack />
    </SafeAreaView>
  );
}

export default App;
