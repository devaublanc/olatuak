export type Spot = {
  id: string;
  name: string;
  city: string;
  metadata?: {
    thumbnail?: string;
    mpd?: string;
    m3u8?: string;
  };
};

export const getSpotThumbnail = (spotId: string) => {
  return `https://deliverys5.quanteec.com/contents/encodings/live/${spotId}/thumbnail.jpg`;
};

export const getSpotMpd = (spotId: string) => {
  return `https://deliverys5.quanteec.com/contents/encodings/live/${spotId}/mpd.mpd`;
};

export const getSpotM3u8 = (spotId: string) => {
  return `https://deliverys5.quanteec.com/contents/encodings/live/${spotId}/master.m3u8`;
};

export const getSpotMetadata = (spotId: string) => {
  return {
    thumbnail: getSpotThumbnail(spotId),
    mpd: getSpotMpd(spotId),
    m3u8: getSpotM3u8(spotId),
  };
};

export const getSpotById = (spotId: string): Spot => {
  return spots.find(spot => spot.id === spotId) as Spot;
};

export const spots: Spot[] = [
  {
    id: "a854713e-4ff8-4604-3530-3030-6d61-63-9cd2-d6318680e987d",
    name: "Plage du Club",
    city: "Anglet",
  },
  {
    id: "efb28fcb-c77e-48f2-3730-3030-6d61-63-9ec0-d8ec4bba1bacd",
    name: "Plage des Sables d'Or",
    city: "Anglet",
  },
  {
    id: "8db1eb47-bf35-4cc5-3230-3030-6d61-63-a480-d5af1dc07ff9d",
    name: "Plage du VVF",
    city: "Anglet",
  },
  {
    id: "ce404f1a-edf3-405a-3537-3530-6d61-63-9b25-e5aeaf2c6ee5d",
    name: "Plage Marinella Sables d'Or",
    city: "Anglet",
  },
  {
    id: "c56ac32d-4df6-4924-3430-3030-6d61-63-9e97-d84cc86e129bd",
    name: "Madrague, Océan, Dune",
    city: "Anglet",
  },
  {
    id: "ab545616-6ccf-4fb1-3630-3030-6d61-63-8146-78fe2f208d2fd",
    name: "Cavaliers",
    city: "Anglet",
  },
  {
    id: "ae95b2a8-db24-4de1-3330-3030-6d61-63-941e-36b7314774f8d",
    name: "La Barre",
    city: "Anglet",
  },
  {
    id: "ffd2c10a-e812-4729-3930-3130-6d61-63-a799-247bcd11ebafd",
    name: "La Grande Plage",
    city: "Biarritz",
  },
  {
    id: "4ec957fc-fea2-49f2-3530-3130-6d61-63-872c-0869d3d9cef1d",
    name: "Côte des Basques",
    city: "Biarritz",
  },
  {
    id: "36f2d43a-6345-4afd-3031-3130-6d61-63-8139-e6d142b8a4c3d",
    name: "Plage du Centre",
    city: "Bidart",
  },
];
