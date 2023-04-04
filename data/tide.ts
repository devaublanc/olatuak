const TIDE_API_URL =
  "https://webcritech.jrc.ec.europa.eu/SeaLevelsDb/api/Device/1643/Data";

type TideItemResponse = {
  Date: string;
  Value: number;
};

type TideApiResponse = TideItemResponse[];

export type Tide = {
  date: string;
  value: number;
};

export type Tides = Tide[];

export async function getTide(start: string, end: string) {
  try {
    const response = await fetch(
      "https://webcritech.jrc.ec.europa.eu/SeaLevelsDb/api/Device/1694/Data?tMin=2023-04-03%2022%3A00%3A00&tMax=2023-04-04%2021%3A59%3A00&field=tide"
    );

    const data: TideApiResponse = await response.json();

    let currentHour = 0;
    return data
      .filter(item => {
        return new Date(item.Date).getMinutes() === 0;
      })
      .reduce((acc: Tide[], item: TideItemResponse) => {
        acc.push({
          date: new Date(item.Date).toISOString(),
          value: item.Value,
        });
        // }s
        return acc;
      }, [] as Tide[]);
  } catch (error) {
    console.error(error);
    return null;
  }
}
