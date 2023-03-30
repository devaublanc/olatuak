import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import { SpotDetailScreen } from "../screens/SpotDetailScreen";
import colors from "../theme/colors";

export type RootStackParamList = {
  Home: undefined;
  SpotDetail: { spotId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
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
          name="Home"
          component={HomeScreen}
          options={{
            title: "Olatuak",
            headerTitleStyle: {
              fontWeight: "900",
              color: colors.white[500],
            },
          }}
        />
        <Stack.Screen
          name="SpotDetail"
          component={SpotDetailScreen}
          options={{
            presentation: "modal",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
