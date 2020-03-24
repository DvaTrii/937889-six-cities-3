import React from "react";
import {connect} from 'react-redux';

import PropTypes from "prop-types";
import {CardPropType} from "../prop-validator/prop-validator";
import Header from "../header/header.jsx";
import OffersList from "../offers-list/offers-list.jsx";
import Map from "../map/map.jsx";
import CitiesList from "../cities-list/cities-list.jsx";
import {ActionCreator} from "../../reducer.js";

const Main = (props) => {
  const {cities, currentCity, onCityChange, cards, onCardHover, onHeaderClick} = props;
  const currentCityCards = cards.filter((card) => card.city === currentCity);

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList
              cities={cities}
              onCityChange={onCityChange}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentCityCards.length} places to stay in {currentCity}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li
                    className="places__option places__option--active"
                    tabIndex="0"
                  >
                    Popular
                  </li>
                  <li className="places__option" tabIndex="0">
                    Price: low to high
                  </li>
                  <li className="places__option" tabIndex="0">
                    Price: high to low
                  </li>
                  <li className="places__option" tabIndex="0">
                    Top rated first
                  </li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                {<OffersList
                  cards = {currentCityCards}
                  onCardHover = {onCardHover}
                  onHeaderClick = {onHeaderClick}
                  isOfferDetailed={false}/>}
              </div>
            </section>
            <div className="cities__right-section">
              <Map cards = {currentCityCards} isOfferDetailed={false}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  // offersCount: PropTypes.number.isRequired,
  cards: PropTypes.arrayOf(CardPropType).isRequired,
  onCardHover: PropTypes.func.isRequired,
  onHeaderClick: PropTypes.func.isRequired,
  cities: PropTypes.object,
  onCityChange: PropTypes.func,
  currentCity: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    cities: state.citiesList,
    currentCity: state.currentCity
  };
};

const mapDispatchToProps = (dispatch) => ({
  onCityChange: (city) => dispatch(ActionCreator.changeCity(city)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
