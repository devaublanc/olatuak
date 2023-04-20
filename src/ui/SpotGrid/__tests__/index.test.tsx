import { fireEvent } from '@testing-library/react-native';
import React from 'react';

import { Spot } from '../../../data/spot';
import { render } from '../../../utils/test-utils';
import { SpotGrid } from '../SpotGrid';

const mockSpots: Spot[] = [
  {
    id: '1',
    name: 'Spot 1',
    city: 'City 1',
    metadata: {
      thumbnail: 'https://example.com/spot1.jpg',
      mpd: 'https://example.com/spot1.mpd',
      m3u8: 'https://example.com/spot1.m3u8',
    },
  },
  {
    id: '2',
    name: 'Spot 2',
    city: 'City 2',
    metadata: {
      thumbnail: 'https://example.com/spot2.jpg',
      mpd: 'https://example.com/spot2.mpd',
      m3u8: 'https://example.com/spot2.m3u8',
    },
  },
];

describe('SpotGrid', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <SpotGrid spots={mockSpots} header={null} onPressItem={() => {}} />
    );
    expect(getByTestId('spot-grid')).toBeDefined();
  });

  it('renders the correct number of spots', () => {
    const { getAllByTestId } = render(
      <SpotGrid spots={mockSpots} header={null} onPressItem={() => {}} />
    );
    const spotItems = getAllByTestId(/^spot-item-\w+$/);
    expect(spotItems).toHaveLength(mockSpots.length);
  });

  it('calls onPressItem with the correct spot id when a spot item is pressed', () => {
    const onPressItem = jest.fn();
    const { getByTestId } = render(
      <SpotGrid spots={mockSpots} header={null} onPressItem={onPressItem} />
    );
    const spotItem = getByTestId(`spot-item-${mockSpots[0].id}`);
    fireEvent.press(spotItem);
    expect(onPressItem).toHaveBeenCalledWith(mockSpots[0].id);
  });
});
