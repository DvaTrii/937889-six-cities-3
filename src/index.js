import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Data = {
  OFFERS_COUNT: 312,
  CARDS: [
    {
      name: `bed apartment`,
    },
    {
      name: `bad apartment`,
    },
    {
      name: `cosy apartment`,
    },
    {
      name: `light apartment`,
    },
  ],
  HEADER_CLICK: () => {}
};

ReactDOM.render(
    <App
      offersCount = {Data.OFFERS_COUNT}
      cards = {Data.CARDS}
      onHeaderClick={Data.HEADER_CLICK}
    />,
    document.querySelector(`#root`)
);
