import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
// import {CardPropType} from "../prop-validator/prop-validator";

const App = (props) => {
  const {offersCount, cards, onCardHover} = props;

  return (
    <Main
      offersCount={offersCount}
      cards={cards}
      onCardHover={onCardHover}
    />
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  cards: PropTypes.array.isRequired,
  onCardHover: PropTypes.func.isRequired,
};

export default App;
