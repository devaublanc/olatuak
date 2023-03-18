import { ActivityIndicator, View } from "react-native";

export type VideoPlaceholderProps = {
  width: number;
  height: number;
};
export function PlayerPlaceholder({ width, height }: VideoPlaceholderProps) {
  return (
    <View
      style={{
        width,
        height,
        backgroundColor: "black",
        justifyContent: "center",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <ActivityIndicator size={"large"} />
    </View>
  );
}
