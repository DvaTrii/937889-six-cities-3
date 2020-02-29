import React from "react";
import renderer from "react-test-renderer";
import {testCards} from "../../utils/utils.js";
import OfferCardDetailed from "./offer-card-detailed.jsx";


it(`Render test OfferCardDetailed`, () => {
  const tree = renderer
    .create(<OfferCardDetailed
      card = {testCards.CARDS[1]}
      onCardHover = {() => {}}
      onHeaderClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
