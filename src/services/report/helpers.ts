import { Coordinates } from './types';
import { config } from '../../config';

export function getMarineEndpoint(coodinates: Coordinates) {
  const marineParams = new URLSearchParams({
    latitude: coodinates.latitude,
    longitude: coodinates.longitude,
    hourly: [
      'wave_height',
      'wave_direction',
      'wave_period',
      'wind_wave_height',
      'wind_wave_direction',
      'wind_wave_period',
      'wind_wave_peak_period',
      'swell_wave_height',
      'swell_wave_direction',
      'swell_wave_period',
      'swell_wave_peak_period',
    ].join(','),
  });

  return `${config.MARINE_API_URL}?${marineParams}`;
}

export function getForecastEndpoint(coodinates: Coordinates) {
  const forecastParams = new URLSearchParams({
    latitude: coodinates.latitude,
    longitude: coodinates.longitude,
    hourly: [
      'windspeed_10m',
      'windspeed_80m',
      'windspeed_120m',
      'windspeed_180m',
      'winddirection_10m',
      'winddirection_80m',
      'winddirection_120m',
      'winddirection_180m',
    ].join(','),
  });
  return `${config.FORCAST_API_URL}?${forecastParams}`;
}
