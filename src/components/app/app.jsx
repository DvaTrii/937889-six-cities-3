import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = (props) => {
  const {offersCount, cards} = props;

  return (
    <Main offersCount={offersCount} cards={cards}
    />
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  cards: PropTypes.array,
};

export default App;
