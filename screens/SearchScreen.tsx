import { Dimensions, View, StyleSheet } from "react-native";
import { Text } from "../ui/Text";

import React, { useState, useEffect } from "react";
import { LineChart } from "react-native-chart-kit";
import colors from "../theme/colors";

const MyBezierLineChart = () => {
  return (
    <>
      <Text style={styles.header}>Bezier Line Chart</Text>
      <LineChart
        data={{
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
          ],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get("window").width - 16} // from react-native
        height={220}
        yAxisLabel={"Rs"}
        chartConfig={{
          backgroundColor: "#F0F",
          backgroundGradientFrom: colors.blue[500],
          backgroundGradientTo: colors.blue[500],
          labelColor: () => colors.secondary[500],
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 255) => colors.primary[500],
          style: {
            borderRadius: 8,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </>
  );
};

export function SearchScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MyBezierLineChart />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 10,
  },
  header: {
    textAlign: "center",
    fontSize: 18,
    padding: 16,
    marginTop: 16,
  },
});
