import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { Player } from '../components/Player/Player';
import { SpotStackParamList } from '../navigation/RootStack';
import { useReport } from '../services/report/hooks';
import { Report } from '../ui/Report/Report';
import { getSpotById } from '../utils/spot';

export type SpotDetailScreenProps = NativeStackScreenProps<SpotStackParamList, 'SpotDetail'>;
export function SpotDetailScreen({ navigation, route }: SpotDetailScreenProps) {
  const { data, isLoading, isStale, isFetching } = useReport(route.params.spotId);
  useEffect(() => {
    const { name } = getSpotById(route.params.spotId);
    navigation.setOptions({ title: name });
  }, [route.params.spotId]);

  console.log({ isStale, isFetching });

  return (
    <View
      style={{
        flex: 1,
      }}>
      <Player />
      <View style={{ flex: 1 }}>
        {isLoading && <ActivityIndicator />}
        {data !== undefined && <Report report={data} />}
      </View>
    </View>
  );
}
