import { Stack } from "expo-router";
import { SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import colors from "../theme/colors";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
  // return <SplashScreen />;

  return (
    <>
      <StatusBar style="light" />
      <Stack
        initialRouteName="index"
        screenOptions={{
          contentStyle: {
            backgroundColor: colors.blue[500],
          },
          headerStyle: {
            backgroundColor: colors.blue[500],
          },
          headerTitleStyle: {
            color: colors.white[500],
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            // Hide the header for all other routes.
            title: "PirateSurf",
            headerTitleStyle: {
              fontWeight: "900",
              color: colors.white[500],
            },
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="modal"
          options={{
            // Set the presentation mode to modal for our modal route.
            presentation: "modal",
          }}
        />
      </Stack>
    </>
  );
}
