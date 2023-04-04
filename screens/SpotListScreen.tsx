import { spots } from "../data/spot";

import { SpotGrid } from "../ui/SpotGrid";

import { useCallback } from "react";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SpotStackParamList } from "../navigation/RootStack";
import { useTide } from "../hooks/useTide";
import { TideChart } from "../ui/Tide";

import { ReportPreview } from "../ui/ReportPreview";

export type SpotListScreenProps = NativeStackScreenProps<
  SpotStackParamList,
  "SpotList"
>;

export function SpotListScreen({ navigation }: SpotListScreenProps) {
  const { data } = useTide();
  const onPressItem = useCallback((spotId: string) => {
    navigation.navigate("SpotDetail", { spotId: spotId });
  }, []);

  return (
    <>
      <ReportPreview />
      <SpotGrid
        onPressItem={onPressItem}
        spots={spots}
        header={data?.length ? <TideChart tides={data} /> : null}
      />
    </>
  );
}
