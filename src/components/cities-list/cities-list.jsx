import React from "react";
import PropTypes from "prop-types";
import {CitiesPropType} from "../prop-validator/prop-validator.js";

const CitiesList = (props) => {
  const {cities} = props;
  return <ul className="locations__list tabs__list">
    {cities.map((el, i) => <li key={i + el.city} className="locations__item">
      <a
        className={`locations__item-link tabs__item ${el.isActive && `tabs__item--active`}`}
        href="#">
        <span>{el.city}</span>
      </a>
    </li>
    )}
  </ul>;
};

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(CitiesPropType)
};

export default CitiesList;
