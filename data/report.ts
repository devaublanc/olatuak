import dayjs from "dayjs";

type MarineApiResponse = {
  hourly: {
    time: string[];
    wave_height: number[];
    wave_direction: number[];
    wave_period: number[];
    wind_wave_height: number[];
    wind_wave_direction: number[];
    wind_wave_period: number[];
    wind_wave_peak_period: number[];
    swell_wave_height: number[];
    swell_wave_direction: number[];
    swell_wave_period: number[];
    swell_wave_peak_period: number[];
  };
};

type ForecastApiResponse = {
  hourly: {
    time: string[];
    windspeed_80m: number[];
    winddirection_80m: number[];
  };
};

export type ReportItem = {
  time: string;
  day: string;
  hour: string;
  waveHeight: number;
  waveDirection: number;
  wavePeriod: number;
  windSpeed80m: number;
  windDirection80m: number;
};

export type Report = ReportItem[];

const MARINE_API_URL =
  "https://marine-api.open-meteo.com/v1/marine?latitude=43.49&longitude=-1.52&hourly=wave_height&hourly=wave_direction&hourly=wave_period&hourly=wind_wave_height&hourly=wind_wave_direction&hourly=wind_wave_period&hourly=wind_wave_peak_period&hourly=swell_wave_height&hourly=swell_wave_direction&hourly=swell_wave_period&hourly=swell_wave_peak_period";
const FORCAST_API_URL =
  "https://api.open-meteo.com/v1/forecast?latitude=43.49&longitude=-1.52&hourly=windspeed_80m&hourly=winddirection_80m";

export async function getReport(): Promise<Report> {
  const [marineResponse, forecastResponse] = await Promise.all([
    fetch(MARINE_API_URL).then(response =>
      response.json()
    ) as Promise<MarineApiResponse>,
    fetch(FORCAST_API_URL).then(response =>
      response.json()
    ) as Promise<ForecastApiResponse>,
  ]);

  const { time, wave_height, wave_direction, wave_period } =
    marineResponse.hourly;
  const { windspeed_80m, winddirection_80m } = forecastResponse.hourly;

  const report: Report = time.map((timestamp, index) => {
    const date = dayjs(timestamp);
    const day = date.format("ddd D");
    const hour = date.format("H[h]");

    return {
      time: timestamp,
      day,
      hour,
      waveHeight: wave_height[index],
      waveDirection: wave_direction[index],
      wavePeriod: wave_period[index],
      windDirection80m: winddirection_80m[index],
      windSpeed80m: windspeed_80m[index],
    };
  });

  return report;
}
