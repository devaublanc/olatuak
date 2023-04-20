import { render } from '@testing-library/react-native';
import React from 'react';

import Rating from '../Rating';

describe('Rating', () => {
  it('should render filled and empty stars based on value prop', () => {
    const { getAllByTestId } = render(<Rating value={3} />);

    const filledStars = getAllByTestId('filled-star');
    const emptyStars = getAllByTestId('empty-star');

    expect(filledStars).toHaveLength(3);
    expect(emptyStars).toHaveLength(2);
  });
});
