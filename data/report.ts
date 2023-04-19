import dayjs from 'dayjs';

type MarineApiResponse = {
  hourly: {
    time: string[];
    wave_height: number[];
    wave_period: number[];
    wave_direction: number[];
    wind_wave_height: number[];
    wind_wave_direction: number[];
    wind_wave_period: number[];
    wind_wave_peak_period: number[];
    swell_wave_period: number[];
    swell_wave_height: number[];
    swell_wave_peak_period: number[];
    swell_wave_direction: number[];
  };
};

type ForecastApiResponse = {
  hourly: {
    time: string[];
    windspeed_10m: number[];
    windspeed_80m: number[];
    windspeed_120m: number[];
    windspeed_180m: number[];
    winddirection_10m: number[];
    winddirection_80m: number[];
    winddirection_120m: number[];
    winddirection_180m: number[];
  };
};

export type ReportItem = {
  time: string;
  day: string;
  hour: string;

  waveHeight: number;
  waveDirection: number;
  wavePeriod: number;

  windWaveHeight: number;
  windWaveDirection: number;
  windWavePeriod: number;
  windWavePeakPeriod: number;

  swellWavePeriod: number;
  swellWaveHeight: number;
  swellWavePeakPeriod: number;
  swellWaveDirection: number;

  windSpeed10m: number;
  windSpeed80m: number;
  windSpeed120m: number;
  windSpeed180m: number;

  windDirection10m: number;
  windDirection80m: number;
  windDirection120m: number;
  windDirection180m: number;
};

export type Report = ReportItem[];

const MARINE_API_URL =
  'https://marine-api.open-meteo.com/v1/marine?latitude=43.49&longitude=-1.52&hourly=wave_height&hourly=wave_period&hourly=wave_direction&hourly=wind_wave_height&hourly=wind_wave_direction&hourly=wind_wave_period&hourly=wind_wave_peak_period&hourly=swell_wave_period&hourly=swell_wave_height&hourly=swell_wave_peak_period&hourly=swell_wave_direction';
const FORCAST_API_URL =
  'https://api.open-meteo.com/v1/forecast?latitude=43.49&longitude=-1.52&hourly=windspeed_10m&hourly=windspeed_80m&hourly=windspeed_120m&hourly=windspeed_180m&hourly=winddirection_10m&hourly=winddirection_80m&hourly=winddirection_120m&hourly=winddirection_180m';

export async function getReport(): Promise<Report> {
  const [marineResponse, forecastResponse] = await Promise.all([
    fetch(MARINE_API_URL).then((response) => response.json()) as Promise<MarineApiResponse>,
    fetch(FORCAST_API_URL).then((response) => response.json()) as Promise<ForecastApiResponse>,
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
