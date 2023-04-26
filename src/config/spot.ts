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

export const spots: Spot[] = [
  {
    id: 'a854713e-4ff8-4604-3530-3030-6d61-63-9cd2-d6318680e987d',
    name: 'Plage du Club',
    city: 'Anglet',
    metadata: {
      thumbnail:
        'https://deliverys5.quanteec.com/contents/encodings/live/a854713e-4ff8-4604-3530-3030-6d61-63-9cd2-d6318680e987d/thumbnail.jpg',
      mpd: 'https://deliverys5.quanteec.com/contents/encodings/live/a854713e-4ff8-4604-3530-3030-6d61-63-9cd2-d6318680e987d/mpd.mpd',
      m3u8: 'https://deliverys5.quanteec.com/contents/encodings/live/a854713e-4ff8-4604-3530-3030-6d61-63-9cd2-d6318680e987d/master.m3u8',
    },
  },
  {
    id: 'efb28fcb-c77e-48f2-3730-3030-6d61-63-9ec0-d8ec4bba1bacd',
    name: "Plage des Sables d'Or",
    city: 'Anglet',
    metadata: {
      thumbnail:
        'https://deliverys5.quanteec.com/contents/encodings/live/efb28fcb-c77e-48f2-3730-3030-6d61-63-9ec0-d8ec4bba1bacd/thumbnail.jpg',
      mpd: 'https://deliverys5.quanteec.com/contents/encodings/live/efb28fcb-c77e-48f2-3730-3030-6d61-63-9ec0-d8ec4bba1bacd/mpd.mpd',
      m3u8: 'https://deliverys5.quanteec.com/contents/encodings/live/efb28fcb-c77e-48f2-3730-3030-6d61-63-9ec0-d8ec4bba1bacd/master.m3u8',
    },
  },
  {
    id: '8db1eb47-bf35-4cc5-3230-3030-6d61-63-a480-d5af1dc07ff9d',
    name: 'Plage du VVF',
    city: 'Anglet',
    metadata: {
      thumbnail:
        'https://deliverys5.quanteec.com/contents/encodings/live/8db1eb47-bf35-4cc5-3230-3030-6d61-63-a480-d5af1dc07ff9d/thumbnail.jpg',
      mpd: 'https://deliverys5.quanteec.com/contents/encodings/live/8db1eb47-bf35-4cc5-3230-3030-6d61-63-a480-d5af1dc07ff9d/mpd.mpd',
      m3u8: 'https://deliverys5.quanteec.com/contents/encodings/live/8db1eb47-bf35-4cc5-3230-3030-6d61-63-a480-d5af1dc07ff9d/master.m3u8',
    },
  },
  {
    id: 'ce404f1a-edf3-405a-3537-3530-6d61-63-9b25-e5aeaf2c6ee5d',
    name: "Plage Marinella Sables d'Or",
    city: 'Anglet',
    metadata: {
      thumbnail:
        'https://deliverys5.quanteec.com/contents/encodings/live/ce404f1a-edf3-405a-3537-3530-6d61-63-9b25-e5aeaf2c6ee5d/thumbnail.jpg',
      mpd: 'https://deliverys5.quanteec.com/contents/encodings/live/ce404f1a-edf3-405a-3537-3530-6d61-63-9b25-e5aeaf2c6ee5d/mpd.mpd',
      m3u8: 'https://deliverys5.quanteec.com/contents/encodings/live/ce404f1a-edf3-405a-3537-3530-6d61-63-9b25-e5aeaf2c6ee5d/master.m3u8',
    },
  },
  {
    id: 'c56ac32d-4df6-4924-3430-3030-6d61-63-9e97-d84cc86e129bd',
    name: 'Madrague, Océan, Dune',
    city: 'Anglet',
    metadata: {
      thumbnail:
        'https://deliverys5.quanteec.com/contents/encodings/live/c56ac32d-4df6-4924-3430-3030-6d61-63-9e97-d84cc86e129bd/thumbnail.jpg',
      mpd: 'https://deliverys5.quanteec.com/contents/encodings/live/c56ac32d-4df6-4924-3430-3030-6d61-63-9e97-d84cc86e129bd/mpd.mpd',
      m3u8: 'https://deliverys5.quanteec.com/contents/encodings/live/c56ac32d-4df6-4924-3430-3030-6d61-63-9e97-d84cc86e129bd/master.m3u8',
    },
  },
  {
    id: 'ab545616-6ccf-4fb1-3630-3030-6d61-63-8146-78fe2f208d2fd',
    name: 'Cavaliers',
    city: 'Anglet',
    metadata: {
      thumbnail:
        'https://deliverys5.quanteec.com/contents/encodings/live/ab545616-6ccf-4fb1-3630-3030-6d61-63-8146-78fe2f208d2fd/thumbnail.jpg',
      mpd: 'https://deliverys5.quanteec.com/contents/encodings/live/ab545616-6ccf-4fb1-3630-3030-6d61-63-8146-78fe2f208d2fd/mpd.mpd',
      m3u8: 'https://deliverys5.quanteec.com/contents/encodings/live/ab545616-6ccf-4fb1-3630-3030-6d61-63-8146-78fe2f208d2fd/master.m3u8',
    },
  },
  {
    id: 'ae95b2a8-db24-4de1-3330-3030-6d61-63-941e-36b7314774f8d',
    name: 'La Barre',
    city: 'Anglet',
    metadata: {
      thumbnail:
        'https://deliverys5.quanteec.com/contents/encodings/live/ae95b2a8-db24-4de1-3330-3030-6d61-63-941e-36b7314774f8d/thumbnail.jpg',
      mpd: 'https://deliverys5.quanteec.com/contents/encodings/live/ae95b2a8-db24-4de1-3330-3030-6d61-63-941e-36b7314774f8d/mpd.mpd',
      m3u8: 'https://deliverys5.quanteec.com/contents/encodings/live/ae95b2a8-db24-4de1-3330-3030-6d61-63-941e-36b7314774f8d/master.m3u8',
    },
  },
  {
    id: 'ffd2c10a-e812-4729-3930-3130-6d61-63-a799-247bcd11ebafd',
    name: 'La Grande Plage',
    city: 'Biarritz',
    metadata: {
      thumbnail:
        'https://deliverys5.quanteec.com/contents/encodings/live/ffd2c10a-e812-4729-3930-3130-6d61-63-a799-247bcd11ebafd/thumbnail.jpg',
      mpd: 'https://deliverys5.quanteec.com/contents/encodings/live/ffd2c10a-e812-4729-3930-3130-6d61-63-a799-247bcd11ebafd/mpd.mpd',
      m3u8: 'https://deliverys5.quanteec.com/contents/encodings/live/ffd2c10a-e812-4729-3930-3130-6d61-63-a799-247bcd11ebafd/master.m3u8',
    },
  },
  {
    id: '4ec957fc-fea2-49f2-3530-3130-6d61-63-872c-0869d3d9cef1d',
    name: 'Côte des Basques',
    city: 'Biarritz',
    metadata: {
      thumbnail:
        'https://deliverys5.quanteec.com/contents/encodings/live/4ec957fc-fea2-49f2-3530-3130-6d61-63-872c-0869d3d9cef1d/thumbnail.jpg',
      mpd: 'https://deliverys5.quanteec.com/contents/encodings/live/4ec957fc-fea2-49f2-3530-3130-6d61-63-872c-0869d3d9cef1d/mpd.mpd',
      m3u8: 'https://deliverys5.quanteec.com/contents/encodings/live/4ec957fc-fea2-49f2-3530-3130-6d61-63-872c-0869d3d9cef1d/master.m3u8',
    },
  },
  {
    id: '36f2d43a-6345-4afd-3031-3130-6d61-63-8139-e6d142b8a4c3d',
    name: 'Plage du Centre',
    city: 'Bidart',
    metadata: {
      thumbnail:
        'https://deliverys5.quanteec.com/contents/encodings/live/36f2d43a-6345-4afd-3031-3130-6d61-63-8139-e6d142b8a4c3d/thumbnail.jpg',
      mpd: 'https://deliverys5.quanteec.com/contents/encodings/live/36f2d43a-6345-4afd-3031-3130-6d61-63-8139-e6d142b8a4c3d/mpd.mpd',
      m3u8: 'https://deliverys5.quanteec.com/contents/encodings/live/36f2d43a-6345-4afd-3031-3130-6d61-63-8139-e6d142b8a4c3d/master.m3u8',
    },
  },
  {
    id: 'ba1349b6-56b2-4903-3336-3230-6d61-63-b376-97e35dff77f3d',
    name: 'Plage du casino et des jumeaux',
    city: 'Hendaye',
    metadata: {
      thumbnail:
        'https://deliverys5.quanteec.com/contents/encodings/live/ba1349b6-56b2-4903-3336-3230-6d61-63-b376-97e35dff77f3d/thumbnail.jpg',
      mpd: 'https://deliverys5.quanteec.com/contents/encodings/live/ba1349b6-56b2-4903-3336-3230-6d61-63-b376-97e35dff77f3d/mpd.mpd',
      m3u8: 'https://deliverys5.quanteec.com/contents/encodings/live/ba1349b6-56b2-4903-3336-3230-6d61-63-b376-97e35dff77f3d/master.m3u8',
    },
  },
];
