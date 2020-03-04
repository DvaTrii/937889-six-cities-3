import React from "react";
import Review from "../review/review.jsx";
import {CardPropType} from "../prop-validator/prop-validator";

const ReviewsList = (props) => {

  const {reviews} = props;

  const renderReviews = () => {

    return (reviews.map((review, index) => <Review review = {review} key ={index}/>));
  };

  return (
    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {renderReviews()}
      </ul>
    </React.Fragment>
  );
};

ReviewsList.propTypes = CardPropType.reviews.isRequired;

export default ReviewsList;
