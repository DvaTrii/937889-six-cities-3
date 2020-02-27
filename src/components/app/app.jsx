import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
// import {CardPropType} from "../prop-validator/prop-validator";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offersCount, cards, onCardHover} = this.props;

    return (
      <Main
        offersCount={offersCount}
        cards={cards}
        onCardHover={onCardHover}
      />
    );
  }
}

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  cards: PropTypes.array.isRequired,
  onCardHover: PropTypes.func.isRequired,
};

export default App;
