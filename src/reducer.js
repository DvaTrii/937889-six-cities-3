import offers from "./mocks/offers.js";
import {extend} from "./utils/utils.js";

const getCities = (data) => new Set([...data.map((offer) => offer.city)]);

const initialState = {
  currentCity: `Amsterdam`,
  citiesList: getCities(offers),
};

console.log(initialState);

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    city
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        currentCity: action.city
      });

    default: return state;
  }
};

export {reducer, ActionType, ActionCreator};
