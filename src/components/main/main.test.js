import React from "react";
import renderer from "react-test-renderer";
import {testData} from "../../utils/utils.js";
import Main from "./main";


it(`Render test App`, () => {
  const tree = renderer
    .create(<Main
      offersCount={testData.OFFERS_COUNT}
      cards={testData.CARDS}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
