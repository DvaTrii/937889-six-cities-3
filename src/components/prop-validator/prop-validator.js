import {shape, string, func} from "prop-types/prop-types";

export const CardPropType = {
  // MARK: string.isRequired,
  // IMAGE: string.isRequired,
  HEADER_CLICK: func.isRequired,
  INFO: shape({
    // price: number.isRequired,
    // priceText: string.isRequired,
    name: string.isRequired,
    // type: string.isRequired
  })
};
