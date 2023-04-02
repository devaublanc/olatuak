import { ActivityIndicator, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { SpotStackParamList } from "../navigation/RootStack";
import { Player } from "../components/Player/Player";
import { useEffect } from "react";
import { getSpotById } from "../data/spot";
import { Report } from "../ui/Report";

import { useReport } from "../hooks/useReport";

export type SpotDetailScreenProps = NativeStackScreenProps<
  SpotStackParamList,
  "SpotDetail"
>;
export function SpotDetailScreen({ navigation, route }: SpotDetailScreenProps) {
  const { data, loading } = useReport();
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
        {loading && <ActivityIndicator />}
        {data !== null && <Report report={data} />}
      </View>
    </View>
  );
}
