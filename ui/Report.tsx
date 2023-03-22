import { FlatList, View } from "react-native";
import { Report as ReportType } from "../data/report";
import { ReportItem } from "./ReportItem";

export type ReportProps = {
  report: ReportType;
};

export function Report({ report }: ReportProps) {
  return (
    <View style={{ display: "flex", flexDirection: "row", marginTop: 16 }}>
      <FlatList
        horizontal
        data={report}
        renderItem={({ item }) => <ReportItem {...item} />}
        keyExtractor={item => item.time}
      />
    </View>
  );
}
