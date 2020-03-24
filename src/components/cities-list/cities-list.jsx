import React from "react";
import PropTypes from "prop-types";

const CitiesList = (props) => {
  const {cities, currentCity, onCityChange} = props;
  return <ul className="locations__list tabs__list">
    {Array.from(cities).map((city, i) => <li key={i + city} className="locations__item">
      <a
        onClick={(evt) => {
          evt.preventDefault();
          onCityChange(city);
        }}
        className={`locations__item-link tabs__item ${city === console.log(currentCity) && `tabs__item--active`}`}
        href="#">
        <span>{city}</span>
      </a>
    </li>
    )}
  </ul>;
};

CitiesList.propTypes = {
  cities: PropTypes.object,
  currentCity: PropTypes.string,
  onCityChange: PropTypes.func
};

export default CitiesList;
