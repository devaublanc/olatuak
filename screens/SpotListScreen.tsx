import { View } from "react-native";

import { spots } from "../data/spot";

import { SpotGrid } from "../ui/SpotGrid";

import { useCallback, useEffect } from "react";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SpotStackParamList } from "../navigation/RootStack";

export type SpotListScreenProps = NativeStackScreenProps<
  SpotStackParamList,
  "SpotList"
>;

export function SpotListScreen({ navigation }: SpotListScreenProps) {
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
