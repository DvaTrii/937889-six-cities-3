import React from "react";
import PropTypes from "prop-types";
import {CardPropType} from "../prop-validator/prop-validator";

const OfferCard = (props) => {

  const {card, onCardHover, onHeaderClick, isOfferDetailed} = props;

  const {id, isPremium, isBookmark, price, images, title, type, rating} = card;

  return (
    <article className={`${isOfferDetailed ? `near-places__card` : `cities__place-card`} place-card`} onMouseOver={onCardHover}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${isOfferDetailed ? `near-places__image-wrapper` : `cities__image-wrapper`} place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={images[0]} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isBookmark &&
          `place-card__bookmark-button--active`} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${20 * rating}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name" onClick={(evt) => {
          evt.preventDefault();
          onHeaderClick(id);
        }}>
          <a href="#">
            {title}
          </a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  card: CardPropType,
  onCardHover: PropTypes.func.isRequired,
  onHeaderClick: PropTypes.func.isRequired,
  isOfferDetailed: PropTypes.bool.isRequired,
};

export default OfferCard;
