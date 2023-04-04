import { View, StyleSheet } from "react-native";
import colors from "../theme/colors";
import { Text } from "./Text";
import { Cell } from "./Cell";
import { ReportMetric } from "./ReportMetric";
export type ReportItemProps = {
  day: string;
  hour: string;
  waveHeight: number;
  waveDirection: number;
  wavePeriod: number;
  windSpeed80m: number;
  windDirection80m: number;
};

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
        <ReportMetric
          value={waveHeight.toFixed(1)}
          color={colors.primary[500]}
          fontSizeLabel={12}
          unit="m"
          arrowSize={16}
          direction={waveDirection}
        />
      </Cell>

      <Cell>
        <ReportMetric
          value={Math.round(wavePeriod)}
          unit="s"
          color={colors.primary[500]}
          fontSizeLabel={12}
        />
      </Cell>
      <Cell>
        <ReportMetric
          value={Math.round(windSpeed80m)}
          color={colors.secondary[500]}
          fontSizeLabel={12}
          unit="km/h"
          arrowSize={16}
          direction={windDirection80m}
        />
      </Cell>
      <Cell
        style={{
          paddingVertical: 0,
          paddingHorizontal: 0,
          alignItems: "flex-end",
        }}
      >
        <View
          style={{
            backgroundColor: colors.primary[500],
            width: "100%",
            height: "50%",
          }}
        />
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
