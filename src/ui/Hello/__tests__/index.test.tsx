import { fireEvent, screen } from '@testing-library/react-native';
import React from 'react';

import { render } from '../../../utils/test-utils';
import { HelloWorld } from '../Hello';

describe('HelloWorld', () => {
  it('should display username when "Print Username" button is clicked', async () => {
    const expectedUsername = 'Ada Lovelace';

    render(<HelloWorld />);

    fireEvent.changeText(screen.getByTestId('input'), expectedUsername);
    fireEvent.press(screen.getByText('Print Username'));

    // Using `findBy` query to wait for asynchronous operation to finish
    const usernameOutput = await screen.findByTestId('printed-username');

    // Using `toHaveTextContent` matcher from `@testing-library/jest-native` package.
    expect(usernameOutput).toHaveTextContent(expectedUsername);
  });
});
