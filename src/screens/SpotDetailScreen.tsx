import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import { Player } from '../components/Player/Player';
import { SpotDetail } from '../components/SpotDetail/SpotDetail';
import { SpotStackParamList } from '../navigation/RootStack';
import { getSpotById } from '../utils/spot';

export type SpotDetailScreenProps = NativeStackScreenProps<SpotStackParamList, 'SpotDetail'>;
export function SpotDetailScreen({ navigation, route }: SpotDetailScreenProps) {
  useEffect(() => {
    const { name } = getSpotById(route.params.spotId);
    navigation.setOptions({ title: name });
  }, [route.params.spotId]);

  return (
    <View style={styles.container}>
      <Player />
      <SpotDetail spotId={route.params.spotId} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
