import { StyleProp, View, ViewStyle, StyleSheet } from 'react-native';

import colors from '../../theme/colors';

export function Cell({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 4,
    alignItems: 'center',
    paddingVertical: 4,
    alignSelf: 'stretch',
    borderWidth: 0.5,
    height: 32,
    width: 55,
    borderStyle: 'solid',
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: colors.grey[500],
  },
});
