import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import OfferCardDetailed from "../offer-card-detailed/offer-card-detailed.jsx";
import {CardPropType} from "../prop-validator/prop-validator";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      cardNumber: -1,
    };

    this._renderCards = this._renderCards.bind(this);
    this._handleCardHeaderClick = this._handleCardHeaderClick.bind(this);
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
          onHeaderClick={this._handleCardHeaderClick}
          isOfferDetailed={false}
        />
      );
    } else {
      return (
        <OfferCardDetailed
          card={cards[cardNumber]}
          onHeaderClick={this._handleCardHeaderClick}
          onCardHover={onCardHover}
          isOfferDetailed={true}
        />
      );
    }
  }

  _handleCardHeaderClick(id) {
    this.setState({
      cardNumber: id
    });
  }

  render() {

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderCards()}
          </Route>
          <Route exact path="/offer">
            <OfferCardDetailed
              card={this.props.cards[this.state.cardNumber]}
              onHeaderClick={this._handleCardHeaderClick}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  cards: PropTypes.arrayOf(CardPropType).isRequired,
  onCardHover: PropTypes.func.isRequired,
  card: CardPropType
};

export default App;
