import { ReactElement, useCallback } from "react";
import { FlatList, Dimensions } from "react-native";
import { Spot } from "../data/spot";
import { SpotItem } from "./SpotItem";

export type SpotGridProps = {
  spots: Spot[];
  header: ReactElement | null;
  onPressItem: (spotId: string) => void;
};

const numColumns = 2;
const screenWidth = Dimensions.get("window").width;
const gap = 8;
const paddingWrapper = 4;
const itemWidth = screenWidth / numColumns - gap * 2 - paddingWrapper * 2;
const itemHeight = (itemWidth * 214) / 380;

export function SpotGrid({ spots, onPressItem, header }: SpotGridProps) {
  const renderItem = useCallback(({ item }: { item: Spot }) => {
    return (
      <SpotItem
        onPress={() => onPressItem(item.id)}
        height={itemHeight}
        width={itemWidth}
        spot={item}
      />
    );
  }, []);

  return (
    <FlatList
      ListHeaderComponent={header}
      style={{ padding: paddingWrapper }}
      data={spots}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}
