import { FlatList, View, StyleSheet } from 'react-native';

import { ReportHeader } from './ReportHeader';
import { ReportItem } from './ReportItem';
import { Report as ReportType } from '../../data/report';

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
        keyExtractor={(item) => item.day + item.hour + item.waveHeight.toString()}
        stickyHeaderIndices={[0]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 16,
    alignItems: 'flex-end',
  },
});
