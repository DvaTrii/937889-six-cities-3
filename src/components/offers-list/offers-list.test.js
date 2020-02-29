import React from "react";
import renderer from "react-test-renderer";
import {testCards} from "../../utils/utils.js";
import OffersList from "./offers-list.jsx";


it(`Render test Offerslist`, () => {
  const tree = renderer
    .create(<OffersList
      cards = {testCards.CARDS}
      onCardHover = {() => {}}
      onHeaderClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
