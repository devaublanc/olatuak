import { Spot, spots } from '../config/spot';

export const getSpotById = (spotId: string): Spot => {
  return spots.find((spot) => spot.id === spotId) as Spot;
};
