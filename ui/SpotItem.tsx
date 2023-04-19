import { Image } from 'expo-image';
import { TouchableOpacity } from 'react-native';

import { Text } from './Text';
import { getSpotThumbnail, Spot } from '../data/spot';
import colors from '../theme/colors';

export type SpotThumbnailProps = {
  spot: Spot;
  width: number;
  height: number;
  onPress: () => void;
};

export function SpotItem({ spot, width, height, onPress }: SpotThumbnailProps) {
  return (
    <TouchableOpacity onPress={onPress} style={{ padding: 8 }}>
      <Image
        cachePolicy={'none'}
        source={{
          uri: getSpotThumbnail(spot.id),
        }}
        style={{
          width,
          height,
          borderRadius: 10,
          marginBottom: 8,
          backgroundColor: colors.blue[400],
        }}
      />
      <Text
        style={{
          fontSize: 10,
          color: colors.white[500],
          fontWeight: 'bold',
        }}>
        {spot.name}
      </Text>
      <Text style={{ color: colors.grey[500], fontSize: 10 }}>{spot.city}</Text>
    </TouchableOpacity>
  );
}
