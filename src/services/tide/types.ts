export type TideItemResponse = {
  Date: string;
  Value: number;
};

export type TideApiResponse = TideItemResponse[];

export type Tide = {
  date: string;
  value: number;
};

export type Tides = Tide[];
