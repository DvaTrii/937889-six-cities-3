import {shape, string} from "prop-types/prop-types";

export const CardPropType = {
  // MARK: string.isRequired,
  // IMAGE: string.isRequired,
  INFO: shape({
    // price: number.isRequired,
    // priceText: string.isRequired,
    name: string.isRequired,
    // type: string.isRequired
  })
};
