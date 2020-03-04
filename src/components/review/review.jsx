import React from "react";
import PropTypes from "prop-types";
import {CardPropType} from "../prop-validator/prop-validator";

const Review = (props) => {

  const {review} = props;

  const {img, userName, rating, reviewText, fullDate, date} = review;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={img} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {userName}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${20 * rating}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {reviewText}
        </p>
        <time className="reviews__time" dateTime={fullDate}>{date}</time>
      </div>
    </li>
  );
};

Review.propTypes = {
  review: PropTypes.oneOf(CardPropType.reviews).isRequired,
};

export default Review;
