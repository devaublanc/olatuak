import { Image } from 'expo-image';
import { TouchableOpacity, StyleSheet } from 'react-native';

import { Spot } from '../../config/spot';
import colors from '../../theme/colors';
import { Text } from '../Text/Text';

export type SpotThumbnailProps = {
  spot: Spot;
  width: number;
  height: number;
  onPress: () => void;
  testID?: string;
};

export function SpotItem({ spot, width, height, onPress, testID }: SpotThumbnailProps) {
  return (
    <TouchableOpacity testID={testID} onPress={onPress} style={{ padding: 8 }}>
      <Image
        testID="item-picture"
        cachePolicy={'none'}
        source={{
          uri: spot.metadata?.thumbnail,
        }}
        style={[
          {
            width,
            height,
          },
          styles.picture,
        ]}
      />
      <Text style={styles.name}>{spot.name}</Text>
      <Text style={styles.city}>{spot.city}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  picture: {
    borderRadius: 10,
    marginBottom: 8,
    backgroundColor: colors.blue[400],
  },
  name: {
    fontSize: 10,
    color: colors.white[500],
    fontWeight: 'bold',
  },
  city: {
    color: colors.grey[500],
    fontSize: 10,
  },
});
