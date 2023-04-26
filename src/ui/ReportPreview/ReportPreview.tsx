import { View, StyleSheet } from 'react-native';

import colors from '../../theme/colors';
import Rating from '../Rating/Rating';
import { ReportMetric } from '../ReportMetric/ReportMetric';
import { Text } from '../Text/Text';

export function ReportPreview() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Anglet : </Text>
      <View style={styles.wrapper}>
        <View style={styles.reportMetrics}>
          <ReportMetric value="12" unit="s" color={colors.secondary[500]} />
          <ReportMetric
            value="2.5"
            unit="m"
            color={colors.primary[500]}
            direction={180}
            style={styles.metric}
          />

          <ReportMetric
            value="2.5"
            unit="km/h"
            color={colors.secondary[500]}
            direction={100}
            style={styles.metric}
          />
        </View>
        <View>
          <Rating value={4} size={16} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginVertical: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  reportMetrics: {
    flexDirection: 'row',
  },
  metric: {
    marginLeft: 8,
  },
});
