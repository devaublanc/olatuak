import { useEffect, useState } from 'react';

import { getTide } from '../services/tide/queries';
import { Tides } from '../services/tide/types';

export function useTide() {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<Tides | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTide('2023-04-03 22:00:00', '2023-04-04 23:59:00');
        setData(response);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError('Failed to retrieve report.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { loading, data, error };
}
