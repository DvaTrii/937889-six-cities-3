import moment from "moment";

export const testCards = {
  OFFERS_COUNT: 13,
  CARDS: [
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
          img: `img/avatar-max.jpg`,
          userName: `Max`,
          rating: 4,
          reviewText: `Review2Review2Review2Review2Review2`,
          date: 1584078707177,
        },
      ],
      nearPlaces: [
        {id: 1},
      ],
    },
    {
      id: 1,
      isPremium: false,
      isBookmark: false,
      placeCoord: [52.369553943510, 4.85309666406200],
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
          date: 1584078707177,
        },
        {
          img: `img/avatar-angelina.jpg`,
          userName: `Ben`,
          rating: 3,
          reviewText: `Review3Review3Review3Review3Review3`,
          date: 1584078707177,
        },
      ],
      nearPlaces: [
        {id: 0},
      ],
    },
  ]
};
// for attribute
export const formatDate = (data) => {
  return moment(data).format(`YYYY-MM-DD`);
};
// for markup
export const customDate = (data) => {
  return moment(data).format(`MMMM YYYY`);
};

