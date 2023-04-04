import { Dimensions, View, StyleSheet, ScrollView } from "react-native";
import { Text } from "../ui/Text";

import React, { useState, useEffect } from "react";
import { LineChart } from "react-native-chart-kit";
import colors from "../theme/colors";
import { useTide } from "../hooks/useTide";
import { Tides } from "../data/tide";
import dayjs from "dayjs";
import { TideChart } from "../ui/Tide";

export function SearchScreen() {
  const { data } = useTide();

  return <View>{data?.length && <TideChart tides={data} />}</View>;
}
