import {reducer, ActionCreator} from "./reducer.js";

describe(`Reducer test`, () => {

  const initialState = {
    currentCity: `Amsterdam`,
  };

  it(`Change city by action test`, () => {
    expect(reducer(initialState, ActionCreator.changeCity(`Milan`)))
      .toEqual({currentCity: `Milan`});
  });
});
