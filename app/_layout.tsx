import { Stack } from "expo-router";
import { SplashScreen } from "expo-router";
import colors from "../theme/colors";

export default function Layout() {
  // return <SplashScreen />;
  return (
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
          title: "Pirate surf",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="[spot]"
        options={{
          // Set the presentation mode to modal for our modal route.
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
