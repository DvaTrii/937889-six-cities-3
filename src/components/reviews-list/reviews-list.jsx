import React from "react";
import Review from "../review/review.jsx";
import {ReviewPropType} from "../prop-validator/prop-validator";
import PropTypes from "prop-types";

const ReviewsList = (props) => {

  const {reviews} = props;

  return (
    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review, index) => <Review review = {review} key ={index}/>)}
      </ul>
    </React.Fragment>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(ReviewPropType)
};

export default ReviewsList;
