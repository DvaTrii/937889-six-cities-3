import React from "react";
import Map from "./map.jsx";
import renderer from "react-test-renderer";
import {testCards} from "../../utils/utils";

it(`Render test Map`, () => {
  const tree = renderer
    .create(<Map
      cards = {testCards.CARDS}
    />, {
      createNodeMock: () => {
        return document.createElement(`div`);
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
