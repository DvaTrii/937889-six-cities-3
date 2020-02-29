export const testData = {
  OFFERS_COUNT: 13,
  CARDS: [
    {
      name: `room`,
    },
    {
      name: `car`,
    },
    {
      name: `light apartment`,
    },
  ],
};

export const testCards = {
  OFFERS_COUNT: 13,
  CARDS: [
    {
      id: 0,
      isPremium: true,
      isBookmark: true,
      price: 120,
      images: [`img/apartment-01.jpg`, `img/apartment-03.jpg`, `img/apartment-02.jpg`],
      title: `Nice, cozy, warm big bed apartment`,
      type: `Apartment`,
      rating: 2,
      description: `Leo in vitae turpis massa sed elementum tempus egestas. Facilisi cras fermentum odio eu feugiat pretium nibh.`,
      facilities: [`Wifi`, `Heating`, `Kitchen`, `Parking`, `Dishwasher`],
      bedroomsAmount: 2,
      maxGuestsAmount: 3,
      hostInfo: {
        name: `Ross`,
        photo: `img/avatar-angelina.jpg`,
        isSuper: true,
      },
    },
    {
      id: 1,
      isPremium: false,
      isBookmark: false,
      price: 110,
      images: [`img/apartment-02.jpg`, `img/apartment-01.jpg`, `img/apartment-03.jpg`],
      title: `Beautiful & luxurious apartment at great location`,
      type: `Apartment`,
      rating: 3,
      description: `Natoque penatibus et magnis dis parturient montes nascetur ridiculus. Sodales ut eu sem integer.`,
      facilities: [`Wifi`, `Heating`, `Kitchen`, `Cable TV`, `Dishwasher`],
      bedroomsAmount: 2,
      maxGuestsAmount: 3,
      hostInfo: {
        name: `Monica`,
        photo: `img/avatar-angelina.jpg`,
        isSuper: true,
      },
    },
  ]
};
