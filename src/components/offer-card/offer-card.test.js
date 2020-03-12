import React from "react";
import renderer from "react-test-renderer";
import {testCards} from "../../utils/utils.js";
import OfferCard from "./offer-card.jsx";


it(`Render test OfferCard`, () => {
  const tree = renderer
    .create(<OfferCard
      card = {testCards.CARDS[1]}
      onCardHover = {() => {}}
      onHeaderClick={() => {}}
      isOfferDetailed={false}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
