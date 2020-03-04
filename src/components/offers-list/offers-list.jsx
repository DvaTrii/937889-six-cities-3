import React from "react";
import PropTypes from "prop-types";
import {CardPropType} from "../prop-validator/prop-validator";

import OfferCard from "../offer-card/offer-card.jsx";

const OffersList = (props) => {
  const {cards, onCardHover, onHeaderClick} = props;

  return (cards.map((card, index) => (<OfferCard card = {card} key = {index} onCardHover = {onCardHover} onHeaderClick={onHeaderClick}/>)));
};

OffersList.propTypes = {
  cards: PropTypes.arrayOf(CardPropType).isRequired,
  onCardHover: PropTypes.func.isRequired,
  onHeaderClick: PropTypes.func.isRequired,
};

export default OffersList;
