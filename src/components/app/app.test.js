import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {testCards} from "../../utils/utils.js";


it(`Render test App`, () => {
  const tree = renderer
    .create(<App
      offersCount = {testCards.OFFERS_COUNT}
      cards = {testCards.CARDS}
      onCardHover = {() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
