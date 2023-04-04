import { FlatList, View, StyleSheet } from "react-native";
import { Report as ReportType } from "../data/report";
import { ReportItem } from "./ReportItem";
import { ReportHeader } from "./ReportHeader";

export type ReportProps = {
  report: ReportType;
};

export function Report({ report }: ReportProps) {
  return (
    <View style={styles.container}>
      <ReportHeader />
      <FlatList
        horizontal
        bounces={false}
        data={report}
        renderItem={({ item }) => <ReportItem {...item} />}
        keyExtractor={item => item.day + item.hour + item.waveHeight.toString()}
        stickyHeaderIndices={[0]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    marginTop: 16,
    alignItems: "flex-end",
  },
});
