import { StyleProp, View, ViewStyle } from "react-native";
import colors from "../theme/colors";

export function Cell({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <View
      style={[
        {
          paddingHorizontal: 4,
          alignItems: "center",
          paddingVertical: 4,
          alignSelf: "stretch",
          borderWidth: 0.5,
          borderStyle: "solid",
          flexDirection: "row",
          justifyContent: "center",
          borderColor: colors.grey[500],
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}
