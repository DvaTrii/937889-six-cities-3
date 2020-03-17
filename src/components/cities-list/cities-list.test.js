import React from "react";
import renderer from "react-test-renderer";

import CitiesList from "./cities-list.jsx";

const mock = [
  {
    city: `Cologne`,
  },
  {
    city: `Paris`,
  }
];

it(`Render test CitiesList`, () => {
  const tree = renderer
    .create(<CitiesList cities={mock}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

