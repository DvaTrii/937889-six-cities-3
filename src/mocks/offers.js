export default [
  {
    id: 0,
    isPremium: true,
    isBookmark: true,
    placeCoord: [52.369553943508, 4.85309666406198],
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
    reviews: [
      {
        img: `img/avatar-angelina.jpg`,
        userName: `Angelina`,
        rating: 3,
        reviewText: `Review1Review1Review1Review1Review1`,
        fullDate: `2019-03-12`,
        date: `March 2019`,
      },
      {
        img: `img/avatar-max.jpg`,
        userName: `Max`,
        rating: 4,
        reviewText: `Review2Review2Review2Review2Review2`,
        fullDate: `2020-02-12`,
        date: `February 2020`,
      },
    ],
    nearPlaces: [
      {id: 1},
      {id: 2},
      {id: 3},
    ],
  },
  {
    id: 1,
    isPremium: false,
    isBookmark: false,
    placeCoord: [52.3909553943508, 4.85309666406198],
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
    reviews: [
      {
        img: `img/avatar-angelina.jpg`,
        userName: `Angelina`,
        rating: 3,
        reviewText: `Review1Review1Review1Review1Review1`,
        fullDate: `2019-03-12`,
        date: `March 2019`,
      },
      {
        img: `img/avatar-max.jpg`,
        userName: `Max`,
        rating: 4,
        reviewText: `Review2Review2Review2Review2Review2`,
        fullDate: `2020-02-12`,
        date: `February 2020`,
      },
    ],
    nearPlaces: [
      {id: 0},
      {id: 2},
      {id: 3},
    ],
  },
  {
    id: 2,
    isPremium: true,
    isBookmark: false,
    placeCoord: [52.3909553943508, 4.929309666406198],
    price: 100,
    images: [`img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`],
    title: `Canal View Prinsengracht`,
    type: `Apartment`,
    rating: 4,
    description: `Venenatis urna cursus eget nunc. Porttitor massa id neque aliquam vestibulum morbi blandit cursus. Velit scelerisque in dictum non consectetur a.`,
    facilities: [`Wifi`, `Heating`, `Kitchen`, `Parking`, `Cable TV`, `Dishwasher`, `Free coffee`],
    bedroomsAmount: 2,
    maxGuestsAmount: 3,
    hostInfo: {
      name: `Reichel`,
      photo: `img/avatar-angelina.jpg`,
      isSuper: true,
    },
    reviews: [
      {
        img: `img/avatar-angelina.jpg`,
        userName: `Angelina`,
        rating: 3,
        reviewText: `Review1Review1Review1Review1Review1`,
        fullDate: `2019-03-12`,
        date: `March 2019`,
      },
      {
        img: `img/avatar-max.jpg`,
        userName: `Max`,
        rating: 4,
        reviewText: `Review2Review2Review2Review2Review2`,
        fullDate: `2020-02-12`,
        date: `February 2020`,
      },
    ],
    nearPlaces: [
      {id: 0},
      {id: 1},
      {id: 3},
    ],
  },
  {
    id: 3,
    isPremium: false,
    isBookmark: true,
    placeCoord: [52.3809553943508, 4.939309666406198],
    price: 85,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`],
    title: `Wood and stone place`,
    type: `Private room`,
    rating: 5,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    facilities: [`Wifi`, `Heating`, `Kitchen`, `Parking`, `Cable TV`],
    bedroomsAmount: 2,
    maxGuestsAmount: 3,
    hostInfo: {
      name: `Joey`,
      photo: `img/avatar-angelina.jpg`,
      isSuper: true,
    },
    reviews: [
      {
        img: `img/avatar-angelina.jpg`,
        userName: `Angelina`,
        rating: 3,
        reviewText: `Review1Review1Review1Review1Review1`,
        fullDate: `2019-03-12`,
        date: `March 2019`,
      },
      {
        img: `img/avatar-max.jpg`,
        userName: `Max`,
        rating: 4,
        reviewText: `Review2Review2Review2Review2Review2`,
        fullDate: `2020-02-12`,
        date: `February 2020`,
      },
    ],
    nearPlaces: [
      {id: 0},
      {id: 1},
      {id: 2},
    ],
  }
];
