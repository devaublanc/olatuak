import { useEffect, useState } from "react";
import { Report, getReport } from "../data/report";

export function useReport() {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<Report | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getReport();
        setData(response);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError("Failed to retrieve report.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { loading, data, error };
}
