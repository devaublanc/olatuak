import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback } from 'react';
import { SafeAreaView } from 'react-native';

import { RootStack } from './src/navigation/RootStack';
import colors from './src/theme/colors';

const queryClient = new QueryClient();

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
      <QueryClientProvider client={queryClient}>
        <RootStack />
      </QueryClientProvider>
    </SafeAreaView>
  );
}

export default App;
