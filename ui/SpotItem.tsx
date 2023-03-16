import { Image } from "expo-image";

import { View } from "react-native";
import { getSpotThumbnail, Spot } from "../data/spot";
import colors from "../theme/colors";
import { Text } from "./Text";

export type SpotThumbnailProps = {
  spot: Spot;
  width: number;
  height: number;
};

export const THUMBNAIL_WIDTH = 380;
export const THUMBNAIL_HEIGHT = 214;

export function SpotItem({ spot, width, height }: SpotThumbnailProps) {
  return (
    <View style={{ padding: 5 }}>
      <Image
        source={{
          uri: getSpotThumbnail(spot.id),
        }}
        style={{
          width,
          height,
          borderRadius: 10,
          marginBottom: 8,
        }}
      />
      <Text
        style={{ fontSize: 10, color: colors.white[500], fontWeight: "bold" }}
      >
        {spot.name}
      </Text>
      <Text style={{ color: colors.grey[500], fontSize: 10 }}>{spot.city}</Text>
    </View>
  );
}
