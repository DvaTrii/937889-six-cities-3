import React from "react";
import ReviewsList from "../reviews-list/reviews-list.jsx";
import {CardPropType} from "../prop-validator/prop-validator.js";
import Map from "../map/map.jsx";
import propertiesNearby from "../../mocks/offers.js";
import OffersList from "../offers-list/offers-list.jsx";
import Header from "../header/header.jsx";

import PropTypes from "prop-types";

const OfferCardDetailed = (props) => {

  const {card, onCardHover, onHeaderClick} = props;

  const {isPremium, isBookmark, price, images, title, type, rating, description, facilities, bedroomsAmount, maxGuestsAmount, hostInfo, reviews, nearPlaces} = card;

  const {name, photo, isSuper} = hostInfo;

  const renderImagesMarkup = () => images.map((image, i) => (
    <div className="property__image-wrapper" key = {i}>
      <img className="property__image" src={image} alt="Photo studio"/>
    </div>
  ));

  const renderFacilitiesMarkup = () => facilities.map((item, i) => (
    <li className="property__inside-item" key = {i}>
      {item}
    </li>
  ));

  const renderStarsMarkup = () =>
    [...new Array(5)]
      .map((_, i) => ++i)
      .reverse()
      .map((value, index) => (
        <React.Fragment key={index}>
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value={value}
            id={`${value}-stars`}
            type="radio"
          />
          <label
            htmlFor={`${value}-stars`}
            className="reviews__rating-label form__rating-label"
            title="perfect"
          >
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </React.Fragment>
      ));

  const nearPlacesId = nearPlaces.map((it) => it.id);

  const nearOffers = propertiesNearby.filter((it) => nearPlacesId.includes(it.id));

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {renderImagesMarkup()}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={`property__bookmark-button button ${isBookmark &&
                `property__bookmark-button--active`}`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${20 * rating}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedroomsAmount} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxGuestsAmount} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {renderFacilitiesMarkup()}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${isSuper && `property__avatar-wrapper--pro`} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={photo} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewsList reviews={reviews}/>
                <form className="reviews__form form" action="#" method="post">
                  <label className="reviews__label form__label" htmlFor="review">Your review</label>
                  <div className="reviews__rating-form form__rating">
                    {renderStarsMarkup()}
                  </div>
                  <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
                  <div className="reviews__button-wrapper">
                    <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
                    </p>
                    <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
                  </div>
                </form>
              </section>
            </div>
          </div>
          <Map cards={nearOffers} isOfferDetailed/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OffersList cards = {nearOffers} isOfferDetailed onHeaderClick={onHeaderClick} onCardHover={onCardHover}/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

OfferCardDetailed.propTypes = {
  card: CardPropType.isRequired,
  onCardHover: PropTypes.func.isRequired,
  onHeaderClick: PropTypes.func.isRequired,
};

export default OfferCardDetailed;
