import React from "react";
import PropTypes from "prop-types";
import Review from "../review/review.jsx";

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

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewsList;
