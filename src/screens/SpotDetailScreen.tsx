import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { Player } from '../components/Player/Player';
import { useReport } from '../hooks/useReport';
import { SpotStackParamList } from '../navigation/RootStack';
import { Report } from '../ui/Report/Report';
import { getSpotById } from '../utils/spot';

export type SpotDetailScreenProps = NativeStackScreenProps<SpotStackParamList, 'SpotDetail'>;
export function SpotDetailScreen({ navigation, route }: SpotDetailScreenProps) {
  const { data, loading } = useReport();
  useEffect(() => {
    const { name } = getSpotById(route.params.spotId);
    navigation.setOptions({ title: name });
  }, [route.params.spotId]);

  return (
    <View
      style={{
        flex: 1,
      }}>
      <Player />
      <View style={{ flex: 1 }}>
        {loading && <ActivityIndicator />}
        {data !== null && <Report report={data} />}
      </View>
    </View>
  );
}
