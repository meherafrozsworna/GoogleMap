import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { GOOGLE_API_KEY } from '../config';

import { Button } from 'react-bootstrap';
import AddModal from './AddModal';

class LocationMap extends Component {
    state = {
        lat: 0,
        lng: 0,
        showModal : false
    };

    componentDidMount = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoordinates);
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    };

    getCoordinates = (position) => {
        //console.log(position);
        this.setState({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
        });
    };

    onMarkerClick = () => {
        this.setState({
            showModal: true
        })
    };

    onCloseModal = ()=> {
        this.setState({
            showModal : false
        })
    }

    render() {
        return (
            <div>
                <Map
                    google={this.props.google}
                    zoom={14}
                    center={{
                        lat: this.state.lat,
                        lng: this.state.lng,
                    }}
                >
                    <Marker
                        position={{ lat: this.state.lat, lng: this.state.lng }}
                        onClick={this.onMarkerClick}
                        name={'Current location'}
                    />

                    <InfoWindow onClose={this.onInfoWindowClose}>
                        <div>
                            <h1>hello</h1>
                        </div>
                    </InfoWindow>

                    <AddModal
                        show={this.state.showModal}
                        onHide={this.onCloseModal}
                        lat = {this.state.lat}
                        lng = {this.state.lng}
                    />
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: GOOGLE_API_KEY,
})(LocationMap);
