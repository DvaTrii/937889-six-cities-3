import React, {PureComponent} from "react";
import leaflet from "leaflet";
import PropTypes from "prop-types";

class Map extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const city = [52.38333, 4.9];

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const zoom = 12;
    const map = leaflet.map(`map`, {
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

    // eslint-disable-next-line react/prop-types
    const offerCords = this.props.cards;
    // eslint-disable-next-line react/prop-types
    offerCords.forEach((it) => {
      leaflet
        .marker(it.placeCoord, {icon})
        .addTo(map);
    });
  }

  render() {
    return (
      <div id="map"></div>
    );
  }
}

Map.protoTypes = {
  cards: PropTypes.array.isRequired,
};

export default Map;
