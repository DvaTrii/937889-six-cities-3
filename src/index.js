import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Data = {
  offersCount: 312
};

ReactDOM.render(
    <App
      offersCount={Data.offersCount}/>,
    document.querySelector(`#root`)
);
