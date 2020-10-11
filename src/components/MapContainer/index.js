import React, { Component } from 'react';
import {
  Map,
  GoogleApiWrapper,
  Polyline,
  Marker,
  InfoWindow,
} from 'google-maps-react';

import './styles.css';

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: true,
      activeMarker: {},
      selectedPlace: {},
      userLocation: {
        lat: 0,
        lng: 0,
      },
      loading: true,
      users: [
        {
          name: 'Paulo Lima',
          address: 'Rua Odorico Mendes, 123',
          lat: -8.0332122,
          lng: -34.8809432,
          technique: 12,
        },
        {
          name: 'Thalys Rossi',
          address: 'Rua Marquês de Abrantes, 55',
          lat: -8.03212,
          lng: -34.8942,
          technique: 12,
        },
        {
          name: 'Renan Brayner',
          address: 'Rua Doutor Machado, 16',
          lat: -8.05212,
          lng: -34.908942,
          technique: 12,
        },
      ],
    };
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          this.setState({
            userLocation: {
              lat: latitude,
              lng: longitude,
            },
            loading: false,
          });
          console.log('Usuário encontrado: ', this.state.userLocation);
        },
        () => {
          this.setState({ loading: false });
        }
      );
    }
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    /**
     * checks if there are any waypoints passed as props from father and renders either markers or nothing
     */
    let markers =
      this.state && this.state.users.length > 0 ? (
        this.state.users.map((users) => (
          <Marker
            key={Math.random()}
            onClick={this.onMarkerClick}
            pic={users.pic}
            name={users.name}
            address={users.address}
            techinique={users.technique}
            position={{
              lat: users.lat,
              lng: users.lng,
            }}
          />
        ))
      ) : (
        <span></span>
      );
    const { google, polylineRoute } = this.props;

    const {
      loading,
      userLocation,
      selectedPlace,
      showingInfoWindow,
      activeMarker,
      users,
    } = this.state;

    if (loading) {
      console.log('Carregando posição geográfica do usuário...');
      return null;
    }
    return (
      <div className='map'>
        <Map
          google={google}
          zoom={14}
          initialCenter={{
            lat: userLocation.lat,
            lng: userLocation.lng,
          }}
        >
          <Polyline
            path={polylineRoute}
            strokeColor='#0000FF'
            strokeOpacity={0.8}
            strokeWeight={2}
          />

          {markers}

          <InfoWindow
            onClose={this.onInfoWindowClose}
            marker={activeMarker}
            visible={showingInfoWindow}
          >
            <div>
              <h2>{selectedPlace.name}</h2>
              <h3>{selectedPlace.address}</h3>
              <h3>{`Técnica: ${selectedPlace.techinique}`}</h3>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_API_KEY,
})(MapContainer);
