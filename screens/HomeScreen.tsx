import { View } from "react-native";

import { spots } from "../data/spot";

import { SpotGrid } from "../ui/SpotGrid";

import { useCallback } from "react";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootStack";

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Home"
>;

export function HomeScreen({ navigation }: HomeScreenProps) {
  const onPressItem = useCallback((spotId: string) => {
    navigation.navigate("SpotDetail", { spotId: spotId });
  }, []);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SpotGrid onPressItem={onPressItem} spots={spots} />
    </View>
  );
}
