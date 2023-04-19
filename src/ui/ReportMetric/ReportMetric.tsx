import { View, StyleSheet, ViewProps } from 'react-native';

import { Arrow } from '../Arrow/Arrow';
import { Text } from '../Text/Text';

export type ReportMetricProps = {
  value: string | number;
  unit?: string;
  color: string;
  fontSizeLabel?: number;
  arrowSize?: number;
  direction?: number;
} & ViewProps;
export const ReportMetric = ({
  value,
  unit,
  fontSizeLabel = 16,
  arrowSize = 20,
  color,
  direction,
  ...props
}: ReportMetricProps) => {
  return (
    <View style={[styles.itemContainer, props.style]}>
      <Text style={[styles.itemLabel, { fontSize: fontSizeLabel }]}>
        {value}
        <Text style={{ fontSize: fontSizeLabel / 1.5 }}>{unit}</Text>
      </Text>
      {direction !== undefined && <Arrow color={color} direction={direction} size={arrowSize} />}
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemLabel: { fontSize: 14, fontWeight: 'bold', marginRight: 2 },
});
