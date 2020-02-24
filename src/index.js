import React from "react";
import ReactDOM from "react-dom";
import cards from "./mocks/offers.js";
import App from "./components/app/app.jsx";

const Data = {
  OFFERS_COUNT: 312,
  CARDS: cards,
  ON_CARD_HOVER: () => {}
};

ReactDOM.render(
    <App
      offersCount = {Data.OFFERS_COUNT}
      cards = {Data.CARDS}
      onCardHover={Data.ON_CARD_HOVER}
    />,
    document.querySelector(`#root`)
);
