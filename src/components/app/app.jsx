import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import OfferCardDetailed from "../offer-card-detailed/offer-card-detailed.jsx";
// import {CardPropType} from "../prop-validator/prop-validator";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      cardNumber: -1,
    };
  }

  _renderCards() {
    const {offersCount, cards, onCardHover} = this.props;
    const {cardNumber} = this.state;

    if (cardNumber === -1 || cardNumber >= cards.length) {
      return (
        <Main
          offersCount={offersCount}
          cards={cards}
          onCardHover={onCardHover}
        />
      );
    } else {
      return (
        <OfferCardDetailed />
      );
    }
  }

  render() {

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderCards()}
          </Route>
          <Route exact path="/dev-card">
            <OfferCardDetailed />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  cards: PropTypes.array.isRequired,
  onCardHover: PropTypes.func.isRequired,
};

export default App;
