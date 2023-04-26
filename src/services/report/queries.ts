import dayjs from 'dayjs';

import { getForecastEndpoint, getMarineEndpoint } from './helpers';
import { ForecastApiResponse, MarineApiResponse, Report } from './types';

export async function getReport(spotId: string): Promise<Report> {
  const [marineResponse, forecastResponse] = await Promise.all([
    fetch(
      getMarineEndpoint({
        latitude: '43.49',
        longitude: '-1.52',
      })
    ).then((response) => response.json()) as Promise<MarineApiResponse>,
    fetch(
      getForecastEndpoint({
        latitude: '43.49',
        longitude: '-1.52',
      })
    ).then((response) => response.json()) as Promise<ForecastApiResponse>,
  ]);

  const { time, wave_height, wave_direction, wave_period } = marineResponse.hourly;
  const {
    windspeed_10m,
    windspeed_80m,
    windspeed_120m,
    windspeed_180m,
    winddirection_10m,
    winddirection_80m,
    winddirection_120m,
    winddirection_180m,
  } = forecastResponse.hourly;

  const report: Report = time.map((timestamp, index) => {
    const date = dayjs(timestamp);
    const day = date.format('ddd D');
    const hour = date.format('H[h]');

    return {
      time: timestamp,
      day,
      hour,
      waveHeight: wave_height[index],
      waveDirection: wave_direction[index],
      wavePeriod: wave_period[index],
      windWaveHeight: marineResponse.hourly.wind_wave_height[index],
      windWaveDirection: marineResponse.hourly.wind_wave_direction[index],
      windWavePeriod: marineResponse.hourly.wind_wave_period[index],
      windWavePeakPeriod: marineResponse.hourly.wind_wave_peak_period[index],
      swellWavePeriod: marineResponse.hourly.swell_wave_period[index],
      swellWaveHeight: marineResponse.hourly.swell_wave_height[index],
      swellWavePeakPeriod: marineResponse.hourly.swell_wave_peak_period[index],
      swellWaveDirection: marineResponse.hourly.swell_wave_direction[index],
      windSpeed10m: windspeed_10m[index],
      windSpeed80m: windspeed_80m[index],
      windSpeed120m: windspeed_120m[index],
      windSpeed180m: windspeed_180m[index],
      windDirection10m: winddirection_10m[index],
      windDirection80m: winddirection_80m[index],
      windDirection120m: winddirection_120m[index],
      windDirection180m: winddirection_180m[index],
    };
  });

  return report;
}
