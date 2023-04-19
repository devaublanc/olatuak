import { ActivityIndicator, View } from 'react-native';

import colors from '../../theme/colors';

export type VideoPlaceholderProps = {
  width: number;
  height: number;
};
export function PlayerPlaceholder({ width, height }: VideoPlaceholderProps) {
  return (
    <View
      style={{
        width,
        height,
        backgroundColor: colors.blue[400],
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
      }}>
      <ActivityIndicator size={'large'} />
    </View>
  );
}
