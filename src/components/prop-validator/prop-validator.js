import {shape, string, number, bool, arrayOf} from "prop-types/prop-types";

export const CardPropType = shape({
  id: number.isRequired,
  isPremium: bool.isRequired,
  isBookmark: bool.isRequired,
  placeCoord: arrayOf(number.isRequired),
  price: number.isRequired,
  images: arrayOf(string.isRequired),
  title: string.isRequired,
  type: string.isRequired,
  rating: number.isRequired,
  description: string.isRequired,
  facilities: arrayOf(string.isRequired),
  bedroomsAmount: number.isRequired,
  maxGuestsAmount: number.isRequired,
  hostInfo: shape({
    name: string.isRequired,
    photo: string.isRequired,
    isSuper: bool.isRequired,
  }).isRequired,
  reviews: arrayOf(shape({
    img: string.isRequired,
    userName: string.isRequired,
    rating: number.isRequired,
    reviewText: string.isRequired,
    fullDate: string.isRequired,
    date: string.isRequired,
  }).isRequired),
}).isRequired;
