import { ActivityIndicator, View, StyleSheet } from 'react-native';

import colors from '../../theme/colors';

export type VideoPlaceholderProps = {
  width: number;
  height: number;
};
export function PlayerPlaceholder({ width, height }: VideoPlaceholderProps) {
  return (
    <View
      style={[
        styles.container,
        {
          width,
          height,
        },
      ]}>
      <ActivityIndicator size={'large'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue[400],
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
  },
});
