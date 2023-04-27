import { ReportItem } from '../services/report/types';

export function generateReportItemVariant(overrides?: Partial<ReportItem>): ReportItem {
  return {
    time: '2023-04-27T12:00:00Z',
    day: 'Wednesday',
    hour: '12Z',
    waveHeight: 2,
    waveDirection: 180,
    wavePeriod: 8,
    windWaveHeight: 1,
    windWaveDirection: 270,
    windWavePeriod: 6,
    windWavePeakPeriod: 8,
    swellWavePeriod: 12,
    swellWaveHeight: 3,
    swellWavePeakPeriod: 14,
    swellWaveDirection: 90,
    windSpeed10m: 10,
    windSpeed80m: 20,
    windSpeed120m: 25,
    windSpeed180m: 30,
    windDirection10m: 180,
    windDirection80m: 200,
    windDirection120m: 220,
    windDirection180m: 240,
    ...overrides,
  };
}
