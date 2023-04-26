export type MarineApiResponse = {
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

export type ForecastApiResponse = {
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

export type Coordinates = {
  latitude: string;
  longitude: string;
};
