import { View } from "react-native";
import colors from "../theme/colors";
import { Text } from "./Text";
import FondationIcon from "@expo/vector-icons/Foundation";
export type ReportItemProps = {
  time: string;
  waveHeight: number;
  waveDirection: number;
  wavePeriod: number;
  windDirection: number;
  windWavePeriod: number;
};

function Cell({ children }: { children: React.ReactNode }) {
  return (
    <View
      style={{
        paddingHorizontal: 4,
        alignItems: "center",
        paddingVertical: 4,
        alignSelf: "stretch",
        borderWidth: 0.5,
        borderStyle: "solid",
        flexDirection: "row",
        justifyContent: "center",
        borderColor: colors.grey[500],
      }}
    >
      {children}
    </View>
  );
}

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
  time,
  waveHeight,
  wavePeriod,
  windDirection,
  windWavePeriod,
}: ReportItemProps) {
  return (
    <View style={{ alignItems: "center" }}>
      <Cell>
        <Text
          numberOfLines={2}
          style={{ width: 50, textAlign: "center", color: colors.grey[500] }}
        >
          {time}
        </Text>
      </Cell>
      <Cell>
        <Arrow direction={windDirection} color={colors.primary[500]} />
      </Cell>
      <Cell>
        <Text>{waveHeight.toFixed(1)}m</Text>
      </Cell>
      <Cell>
        <Text>{Math.round(wavePeriod)}s</Text>
      </Cell>
      <Cell>
        <Arrow direction={windDirection} color="white" />
        <Text style={{ marginLeft: 4 }}>{windWavePeriod.toFixed(1)}</Text>
      </Cell>
    </View>
  );
}
