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
      `${TIDE_API_URL}?tMin=${encodeURIComponent(
        start
      )}&tMax=${encodeURIComponent(end)}&field=tide`
    );
    const data: TideApiResponse = await response.json();

    let currentHour = 0;
    return data.reduce((acc: Tide[], item: TideItemResponse) => {
      const hour = new Date(item.Date).getHours();
      if (hour !== currentHour) {
        currentHour = hour;
        acc.push({
          date: item.Date,
          value: item.Value,
        });
      }
      return acc;
    }, [] as Tide[]);
  } catch (error) {
    console.error(error);
    return null;
  }
}
