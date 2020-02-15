import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";
import {testData} from "../../utils/utils.js";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should each card header be pressed`, () => {
  const clickFn = jest.fn();

  const main = shallow(
      <Main
        offersCount={testData.OFFERS_COUNT}
        cards={testData.CARDS}
        onHeaderClick={clickFn}
      />
  );

  const headers = main.find(`.place-card__name`);
  headers.forEach((element) => element.props().onClick());

  expect(clickFn).toHaveBeenCalledTimes(testData.CARDS.length);
});
