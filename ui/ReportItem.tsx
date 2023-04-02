import { View, StyleSheet } from "react-native";
import colors from "../theme/colors";
import { Text } from "./Text";
import FondationIcon from "@expo/vector-icons/Foundation";
import { Cell } from "./Cell";
export type ReportItemProps = {
  day: string;
  hour: string;
  waveHeight: number;
  waveDirection: number;
  wavePeriod: number;
  windSpeed80m: number;
  windDirection80m: number;
};

export function Arrow({
  direction,
  color,
}: {
  direction: number;
  color: string;
}) {
  return (
    <FondationIcon
      name="arrow-down"
      size={16}
      color={color}
      style={{
        transform: [{ rotate: `${direction}deg` }],
      }}
    />
  );
}

export function ReportItem({
  day,
  hour,
  waveHeight,
  wavePeriod,
  waveDirection,
  windDirection80m,
  windSpeed80m,
}: ReportItemProps) {
  return (
    <View style={styles.container}>
      <Cell>
        <View style={styles.dateWrapper}>
          <Text numberOfLines={3} style={styles.date}>
            {day}
          </Text>
          <Text numberOfLines={3} style={styles.date}>
            {hour}
          </Text>
        </View>
      </Cell>
      <Cell>
        <Arrow direction={waveDirection} color={colors.primary[500]} />
      </Cell>
      <Cell>
        <Text>{waveHeight.toFixed(1)}</Text>
      </Cell>
      <Cell>
        <Text>{Math.round(wavePeriod)}</Text>
      </Cell>
      <Cell>
        <Arrow direction={windDirection80m} color={colors.secondary[500]} />
      </Cell>
      <Cell>
        <Text>{Math.round(windSpeed80m)}</Text>
      </Cell>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  dateWrapper: {
    flexDirection: "column",
    width: 45,
  },
  date: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "bold",
  },
});
