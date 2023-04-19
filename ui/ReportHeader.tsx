import { View, StyleSheet } from 'react-native';

import { Cell } from './Cell';
import { Text } from './Text';

const labels = ['Vagues', 'Période', 'Vent', 'Marée'];

export function ReportHeader() {
  return (
    <View>
      {labels.map((label) => (
        <Cell style={styles.cell} key={label}>
          <Text style={styles.label}>{label}</Text>
        </Cell>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  cell: {
    justifyContent: 'flex-start',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 12,
    letterSpacing: 0.2,
  },
});
