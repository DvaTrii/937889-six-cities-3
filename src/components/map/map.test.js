import React from "react";
import Map from "./map";
import renderer from "react-test-renderer";
import {testCards} from "../../utils/utils";

it(`Render test Map`, () => {
  const tree = renderer
    .create(<Map
      cards = {testCards.CARDS}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
