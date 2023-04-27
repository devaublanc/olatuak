import { render } from '@testing-library/react-native';
import React from 'react';

import { useReport } from '../../../services/report/hooks';
import { Report } from '../../../services/report/types';
import { generateReportItemVariant } from '../../../utils/repot';
import { SpotDetail } from '../SpotDetail';

jest.mock('../../../services/report/hooks');

const useReportMocked = useReport as jest.MockedFunction<typeof useReport>;
type UseReportReturnType = ReturnType<typeof useReport>;

describe('SpotDetail', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render loader when isLoading is true', () => {
    useReportMocked.mockReturnValue({
      data: undefined,
      isLoading: true,
    } as UseReportReturnType);

    const { getByTestId } = render(<SpotDetail spotId="123" />);

    expect(getByTestId('loader')).toBeDefined();
  });

  it('should render Report component when data is available', () => {
    const mockReport: Report = [generateReportItemVariant()];

    useReportMocked.mockReturnValue({
      data: mockReport,
      isLoading: false,
    } as UseReportReturnType);

    const { getByTestId } = render(<SpotDetail spotId="spot123" />);

    expect(getByTestId('report')).toBeDefined();
  });

  it('should not render Report component when data is not available', () => {
    useReportMocked.mockReturnValue({
      data: undefined,
      isLoading: false,
      isFetched: true,
    } as UseReportReturnType);

    const { getByText } = render(<SpotDetail spotId="spot123" />);

    expect(getByText('Surf report non disponible')).toBeDefined();
  });
});
