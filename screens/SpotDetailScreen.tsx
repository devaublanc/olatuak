import { View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../navigation/RootStack";
import { Player } from "../components/Player/Player";
import { useEffect } from "react";
import { getSpotById } from "../data/spot";

export type SpotDetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "SpotDetail"
>;
export function SpotDetailScreen({ navigation, route }: SpotDetailScreenProps) {
  useEffect(() => {
    const { name } = getSpotById(route.params.spotId);
    navigation.setOptions({ title: name });
  }, [route.params.spotId]);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <Player />
    </View>
  );
}
