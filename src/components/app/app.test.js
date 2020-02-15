import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {testData} from "../../utils/utils.js";


it(`Render test App`, () => {
  const tree = renderer
    .create(<App
      offersCount={testData.OFFERS_COUNT}
      cards={testData.CARDS}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
