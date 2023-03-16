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
    id: "ce404f1a-edf3-405a-3537-3530-6d61-63-9b25-e5aeaf2c6ee5d",
    name: "Plage des Sables d'Or",
    city: "Anglet",
  },
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
    id: "ce404f1a-edf3-405a-3537-3530-6d61-63-9b25-e5aeaf2c6ee5d",
    name: "Plage des Sables d'Or",
    city: "Anglet",
  },
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
    id: "ce404f1a-edf3-405a-3537-3530-6d61-63-9b25-e5aeaf2c6ee5d",
    name: "Plage des Sables d'Or",
    city: "Anglet",
  },
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
    id: "ce404f1a-edf3-405a-3537-3530-6d61-63-9b25-e5aeaf2c6ee5d",
    name: "Plage des Sables d'Or",
    city: "Anglet",
  },
];
