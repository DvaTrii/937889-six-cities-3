import React from "react";
import renderer from "react-test-renderer";
import {testCards} from "../../utils/utils.js";
import ReviewsList from "./reviews-list.jsx";


it(`Render test ReviewsList`, () => {
  const tree = renderer
    .create(<ReviewsList
      reviews = {testCards.CARDS[1].reviews}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
