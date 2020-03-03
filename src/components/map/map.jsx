import React, {PureComponent, createRef} from "react";
import leaflet from "leaflet";
import {CardPropType} from "../prop-validator/prop-validator";
import PropTypes from "prop-types";

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = createRef();
  }

  componentDidMount() {
    const city = [52.38333, 4.9];

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const zoom = 12;

    const map = leaflet.map(this._mapRef.current, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });

    map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    this.props.cards.forEach((it) => {
      leaflet
        .marker(it.placeCoord, {icon})
        .addTo(map);
    });
  }

  render() {
    return (
      <section ref={this._mapRef} className="cities__map map" />
    );
  }
}

Map.propTypes = {
  cards: PropTypes.arrayOf(CardPropType).isRequired,
};

export default Map;
