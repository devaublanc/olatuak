import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { View, StyleSheet } from 'react-native';

interface Props {
  value: number;
  size?: number;
  color?: string;
}

function Rating({ value, size = 16, color = 'white' }: Props) {
  const filledStars = Math.floor(value);
  const emptyStars = 5 - filledStars;

  return (
    <View style={styles.container}>
      {[...Array(filledStars)].map((_, index) => (
        <View testID="filled-star" key={`filled-star-${index}`}>
          <FontAwesome name="star" size={size} color={color} />
        </View>
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <View testID="empty-star" key={`empty-star-${index}`}>
          <FontAwesome name="star-o" size={size} color={color} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Rating;
