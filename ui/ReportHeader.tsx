import { View, StyleSheet } from "react-native";
import { Cell } from "./Cell";
import { Text } from "./Text";

export function ReportHeader({}) {
  return (
    <View>
      <Cell style={styles.cell}>
        <Text style={styles.label}>Houle (°)</Text>
      </Cell>
      <Cell style={styles.cell}>
        <Text style={styles.label}>Houle (m)</Text>
      </Cell>
      <Cell style={styles.cell}>
        <Text style={styles.label}>Houle (s)</Text>
      </Cell>
      <Cell style={styles.cell}>
        <Text style={styles.label}>Vent (°)</Text>
      </Cell>
      <Cell style={styles.cell}>
        <Text style={styles.label}>Vent (km/h)</Text>
      </Cell>
    </View>
  );
}

const styles = StyleSheet.create({
  cell: {
    justifyContent: "flex-start",
  },
  label: {
    fontWeight: "bold",
  },
});
