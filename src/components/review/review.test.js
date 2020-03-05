import React from "react";
import renderer from "react-test-renderer";
import {testCards} from "../../utils/utils.js";
import Review from "./review.jsx";


it(`Render test Review`, () => {
  const tree = renderer
    .create(<Review
      review = {testCards.CARDS[1].reviews[0]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
