import { FlatList, Dimensions } from "react-native";
import { Spot } from "../data/spot";
import { SpotItem } from "./SpotItem";

export type SpotGridProps = {
  spots: Spot[];
};
export function SpotGrid({ spots }: SpotGridProps) {
  const numColumns = 2;
  const screenWidth = Dimensions.get("window").width;
  const padding = 5;
  const itemWidth = screenWidth / numColumns - padding * 2;
  const itemHeight = (itemWidth * 214) / 380;
  return (
    <FlatList
      data={spots}
      numColumns={3}
      renderItem={({ item }) => (
        <SpotItem height={itemHeight} width={itemWidth} spot={item} />
      )}
      keyExtractor={item => item.id}
    />
  );
}
