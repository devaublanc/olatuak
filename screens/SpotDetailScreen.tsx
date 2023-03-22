import { Dimensions, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";

import { RootStackParamList } from "../navigation/RootStack";
import { Player } from "../components/Player/Player";
import { useEffect } from "react";
import { getSpotById } from "../data/spot";
import { Report } from "../ui/Report";
import { getReport } from "../data/report";
import colors from "../theme/colors";

export type SpotDetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "SpotDetail"
>;
export function SpotDetailScreen({ navigation, route }: SpotDetailScreenProps) {
  const report = getReport();
  useEffect(() => {
    const { name } = getSpotById(route.params.spotId);
    navigation.setOptions({ title: name });
  }, [route.params.spotId]);
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Player />

      <View style={{ flex: 1 }}>
        <Report report={report} />
      </View>
    </View>
  );
}
