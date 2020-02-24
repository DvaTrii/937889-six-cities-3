import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OfferCard from "./offer-card";
import {testCards} from "../../utils/utils.js";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should card hover by mouseover`, () => {
  const hoverFn = jest.fn();

  const main = shallow(
      <OfferCard
        card={testCards.CARDS[0]}
        onCardHover={hoverFn}
      />
  );

  const card = main.find(`.place-card`);
  card.simulate(`mouseover`);

  expect(hoverFn).toHaveBeenCalledTimes(1);
});
