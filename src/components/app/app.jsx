import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import OfferCardDetailed from "../offer-card-detailed/offer-card-detailed.jsx";
// import {CardPropType} from "../prop-validator/prop-validator";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    // const {offersCount, cards, onCardHover} = this.props;

    return (
      // <Main
      //   offersCount={offersCount}
      //   cards={cards}
      //   onCardHover={onCardHover}
      // />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderOffers()}
          </Route>
          <Route exact path="/dev-card-detailed">
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
