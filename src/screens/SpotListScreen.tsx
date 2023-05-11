import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useCallback } from 'react';
import { Text } from 'react-native';

import { Env } from '../config/env';
import { spots } from '../config/spot';
import { SpotStackParamList } from '../navigation/RootStack';
import { ReportPreview } from '../ui/ReportPreview/ReportPreview';
import { SpotGrid } from '../ui/SpotGrid/SpotGrid';

export type SpotListScreenProps = NativeStackScreenProps<SpotStackParamList, 'SpotList'>;

export function SpotListScreen({ navigation }: SpotListScreenProps) {
  const onPressItem = useCallback((spotId: string) => {
    navigation.navigate('SpotDetail', { spotId });
  }, []);

  return (
    <>
      <Text>APP_VARIANT: {Env.APP_VARIANT}</Text>
      <ReportPreview />
      <SpotGrid
        onPressItem={onPressItem}
        spots={spots}
        // header={data?.length ? <TideChart tides={data} /> : null}
        header={null}
      />
    </>
  );
}
