import { View } from "react-native";

import { spots } from "../data/spot";

import { SpotGrid } from "../ui/SpotGrid";
import { useRouter } from "expo-router";
import { useCallback } from "react";

export default function Home() {
  const route = useRouter();

  const onPressItem = useCallback((spotId: string) => {
    route.push({
      pathname: "/modal",
      params: { spotId },
    });
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
