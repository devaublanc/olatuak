import React from 'react';
import { View } from 'react-native';

import { useTide } from '../hooks/useTide';
import { TideChart } from '../ui/TideChart/TideChart';

export function SearchScreen() {
  const { data } = useTide();

  return <View>{data?.length && <TideChart tides={data} />}</View>;
}