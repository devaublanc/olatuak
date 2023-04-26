import { Spot } from '../../../config/spot';
import { fireEvent, render } from '../../../utils/test-utils';
import { SpotItem } from '../SpotItem';

const mockSpot: Spot = {
  id: '1',
  name: 'Mock Spot',
  city: 'Mock City',
};

describe('SpotItem', () => {
  it('should display spot name and city and picture', () => {
    const { getByText, getByTestId } = render(
      <SpotItem spot={mockSpot} width={100} height={100} onPress={() => {}} />
    );
    const nameText = getByText('Mock Spot');
    const cityText = getByText('Mock City');
    const picture = getByTestId('item-picture');

    expect(nameText).toBeDefined();
    expect(cityText).toBeDefined();
    expect(picture).toBeDefined();
  });

  it('calls onPress when pressed', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <SpotItem spot={mockSpot} width={100} height={100} onPress={onPressMock} />
    );

    const picture = getByTestId('item-picture');
    fireEvent.press(picture);

    expect(onPressMock).toHaveBeenCalled();
  });
});
