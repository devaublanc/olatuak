import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { useReport } from '../../services/report/hooks';
import colors from '../../theme/colors';
import { Report } from '../../ui/Report/Report';
import { Text } from '../../ui/Text/Text';

export type SpotDetailProps = {
  spotId: string;
};
export function SpotDetail({ spotId }: SpotDetailProps) {
  const { data, isLoading, isFetched } = useReport(spotId);
  const hasData = data !== undefined && data?.length > 0;
  const noData = data === undefined && isFetched;

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator testID="loader" size={'large'} color={colors.grey[500]} />}
      {hasData && (
        <View testID="report" style={styles.reportContainer}>
          <Report report={data} />
        </View>
      )}
      {noData && <Text>Surf report non disponible</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  reportContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});
