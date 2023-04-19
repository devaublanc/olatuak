import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useCallback } from 'react';

import { spots } from '../data/spot';
import { useTide } from '../hooks/useTide';
import { SpotStackParamList } from '../navigation/RootStack';
import { ReportPreview } from '../ui/ReportPreview/ReportPreview';
import { SpotGrid } from '../ui/SpotGrid/SpotGrid';
import { TideChart } from '../ui/TideChart/TideChart';

export type SpotListScreenProps = NativeStackScreenProps<SpotStackParamList, 'SpotList'>;

export function SpotListScreen({ navigation }: SpotListScreenProps) {
  const { data } = useTide();
  const onPressItem = useCallback((spotId: string) => {
    navigation.navigate('SpotDetail', { spotId });
  }, []);

  return (
    <>
      <ReportPreview />
      <SpotGrid
        onPressItem={onPressItem}
        spots={spots}
        header={data?.length ? <TideChart tides={data} /> : null}
      />
    </>
  );
}
