import { useState } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const LocationMap = (props) => {
    const [map, setMap] = useState(null);
    const [showingInfoWindow, setShowingInfoWindow] = useState(false);
    const [selectedPlace, setSelectedPlace] = useState({});
    const [activeMarker, setActiveMarker] = useState({});
    const location = props.location.split(',').map( x => parseFloat(x) );

    const onMarkerClick = (props, marker, e) => {
        setActiveMarker(marker);
        setSelectedPlace(props);
        setShowingInfoWindow(true);
    }
    const onMapClicked = (props) => {
        if (showingInfoWindow) {
            setShowingInfoWindow(false);
            setActiveMarker(null);
        }
    }
    return (
        <Map
            google={props.google}
            zoom={14}
            initialCenter={{ lat: location[0], lng: location[1] }}
            onReady={(mapProps, map) => setMap(map)}
            onClick={onMapClicked}
        >
            <Marker onClick={onMarkerClick} name={props.name} />
            <InfoWindow marker={activeMarker} visible={showingInfoWindow}>
                <div>
                    <h1>{selectedPlace.name}</h1>
                </div>
            </InfoWindow>
        </Map>
    );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBZZUgdpepbjmQIuzQdCOYVoJ77MR6SwlI'
})(LocationMap);