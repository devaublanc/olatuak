import { Dimensions, View, StyleSheet, ScrollView } from "react-native";
import { Text } from "../ui/Text";

import React, { useState, useEffect } from "react";
import { LineChart } from "react-native-chart-kit";
import colors from "../theme/colors";
import { useTide } from "../hooks/useTide";
import { Tides } from "../data/tide";
import dayjs from "dayjs";

export const TideChart = ({ tides }: { tides: Tides }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      bounces={false}
      style={{
        width: Dimensions.get("screen").width,
        backgroundColor: "red",
        marginBottom: 16,
      }}
    >
      <LineChart
        data={{
          labels: tides.map(tide => dayjs(tide.date).format("HH[h]")),
          datasets: [
            {
              data: tides.map(tide => tide.value),
            },
          ],
        }}
        width={Dimensions.get("window").width * 2} // from react-native
        yLabelsOffset={20}
        formatYLabel={value => `${value}m`}
        yAxisInterval={3}
        height={160}
        chartConfig={{
          backgroundColor: "#F0F",
          backgroundGradientFrom: colors.blue[500],
          backgroundGradientTo: colors.blue[500],
          labelColor: () => colors.grey[500],
          // decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 255) => colors.primary[500],
        }}
        style={{ marginLeft: 0, paddingLeft: 0 }}
      />
    </ScrollView>
  );
};
