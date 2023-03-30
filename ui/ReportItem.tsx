import { View } from "react-native";
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
}: ReportItemProps) {
  return (
    <View style={{ alignItems: "center" }}>
      <Cell>
        <View
          style={{
            flexDirection: "column",
            width: 45,
          }}
        >
          <Text numberOfLines={3} style={{ textAlign: "center", fontSize: 12 }}>
            {day}
          </Text>
          <Text numberOfLines={3} style={{ textAlign: "center", fontSize: 12 }}>
            {hour}
          </Text>
        </View>
      </Cell>
      <Cell>
        <Arrow direction={waveDirection} color={colors.primary[500]} />
      </Cell>
      <Cell>
        <Text>{waveHeight.toFixed(1)}m</Text>
      </Cell>
      <Cell>
        <Text>{Math.round(wavePeriod)}s</Text>
      </Cell>
    </View>
  );
}
