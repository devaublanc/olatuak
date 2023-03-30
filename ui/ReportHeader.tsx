import { View } from "react-native";
import { Cell } from "./Cell";
import { Text } from "./Text";

export function ReportHeader({}) {
  return (
    <View>
      <Cell style={{ justifyContent: "flex-start" }}>
        <Text style={{ fontWeight: "bold" }}>Houle (°)</Text>
      </Cell>
      <Cell style={{ justifyContent: "flex-start" }}>
        <Text style={{ fontWeight: "bold" }}>Houle (m)</Text>
      </Cell>
      <Cell style={{ justifyContent: "flex-start" }}>
        <Text style={{ fontWeight: "bold" }}>Houle (s)</Text>
      </Cell>
    </View>
  );
}
