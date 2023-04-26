import { useQuery } from '@tanstack/react-query';

import { getReport } from './queries';
import { Report } from './types';

type Error = {
  name: string;
  message: string;
};
export function useReport(spotId: string) {
  const result = useQuery<Report, Error>({
    queryKey: ['report', spotId],
    queryFn: () => getReport(spotId),
    cacheTime: Infinity,
  });
  return result;
}
