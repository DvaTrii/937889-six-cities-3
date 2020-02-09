import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Data = {
  OFFERS_COUNT: 312,
  CARDS: [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`,
    `Nice, cozy, warm big bed apartment`, `Best place to live`],
};

ReactDOM.render(
    <App
      offersCount = {Data.OFFERS_COUNT}
      cards = {Data.CARDS}/>,
    document.querySelector(`#root`)
);
