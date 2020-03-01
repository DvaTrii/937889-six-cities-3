import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OfferCard from "./offer-card";
import {testCards} from "../../utils/utils.js";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`OfferCard e2e test`, () => {
  it(`Should card hover by mouseover`, () => {
    const hoverFn = jest.fn();

    const main = shallow(
        <OfferCard
          card={testCards.CARDS[0]}
          onCardHover={hoverFn}
          onHeaderClick={() => {}}
        />
    );

    const card = main.find(`.place-card`);
    card.simulate(`mouseover`);

    expect(hoverFn).toHaveBeenCalledTimes(1);
  });

  it(`Should click card header`, () => {
    const clickFn = jest.fn();

    const main = shallow(
        <OfferCard
          card={testCards.CARDS[0]}
          onCardHover={() => {}}
          onHeaderClick={clickFn}
        />
    );

    const cardHeader = main.find(`.place-card__name`);
    cardHeader.simulate(`click`, {preventDefault() {}});

    expect(clickFn).toHaveBeenCalledTimes(1);
    expect(clickFn).toHaveBeenCalledWith(testCards.CARDS[0].id);
  });
});
