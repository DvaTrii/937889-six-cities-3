import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import {CardPropType} from "../prop-validator/prop-validator";

const App = (props) => {
  const {offersCount, cards, onHeaderClick} = props;

  return (
    <Main
      offersCount={offersCount}
      cards={cards}
      onHeaderClick={onHeaderClick}
    />
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  cards: PropTypes.arrayOf(CardPropType.INFO).isRequired,
  onHeaderClick: CardPropType.HEADER_CLICK
};

export default App;
