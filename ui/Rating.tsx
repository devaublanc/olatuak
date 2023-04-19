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
        <FontAwesome key={`filled-star-${index}`} name="star" size={size} color={color} />
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <FontAwesome key={`empty-star-${index}`} name="star-o" size={size} color={color} />
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
