import React from "react";
import renderer from "react-test-renderer";
import {testCards} from "../../utils/utils.js";
import Main from "./main";


it(`Render test Main`, () => {
  const tree = renderer
    .create(<Main
      offersCount={testCards.OFFERS_COUNT}
      cards={testCards.CARDS}
      onCardHover={() => {}}
      onHeaderClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
