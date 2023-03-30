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
        <Text style={{ fontWeight: "bold" }}>Taille (m)</Text>
      </Cell>
      <Cell style={{ justifyContent: "flex-start" }}>
        <Text style={{ fontWeight: "bold" }}>Période (s)</Text>
      </Cell>
    </View>
  );
}
