import React from "react";
import PropTypes from "prop-types";

import OfferCard from "../offer-card/offer-card.jsx";

const OffersList = (props) => {
  const {cards, onCardHover} = props;

  return (cards.map((card, index) => (<OfferCard card = {card} key = {index} onCardHover = {onCardHover}/>)));
};

OffersList.propTypes = {
  card: PropTypes.shape({
    isPremium: PropTypes.bool.isRequired,
    isBookmark: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }),
  onCardHover: PropTypes.func.isRequired
};

export default OffersList;

