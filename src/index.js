import React from "react";
import ReactDOM from "react-dom";
import cards from "./mocks/offers.js";
import cities from "./mocks/cities.js";

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './reducer';

import App from "./components/app/app.jsx";

const store = createStore(reducer);

const Data = {
  // OFFERS_COUNT: 312,
  CARDS: cards,
  CITIES: cities,
  ON_CARD_HOVER: () => {}
};

ReactDOM.render(
    <Provider store={store}>
      <App
        // offersCount = {Data.OFFERS_COUNT}
        cards = {Data.CARDS}
        cities={Data.CITIES}
        onCardHover={Data.ON_CARD_HOVER}
      />
    </Provider>,
    document.querySelector(`#root`)
);
