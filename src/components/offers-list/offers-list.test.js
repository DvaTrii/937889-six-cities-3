import React from "react";
import renderer from "react-test-renderer";
import {testCards} from "../../utils/utils.js";
import OffersList from "./offers-list.jsx";


it(`Render test OfferCard`, () => {
  const tree = renderer
    .create(<OffersList
      card = {testCards.CARDS}
      onCardHover = {() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
