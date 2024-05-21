// LEAFLET-REACT COMPONENTS
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// LEAFLET COMPONENTS
import { Icon } from "leaflet";

// REACT HOOKS
// import { useState } from "react";

export default function MapComponent({ destinationData }) {
  const zoom = 13;
  const center = {
    lat: 48.999,
    lng: 2.888,
  };

  const customIcon = new Icon({
    iconUrl: require("./location.png"),
    iconSize: [38, 38], // size of icon
  });

  return (
    <>
      <MapContainer center={center} zoom={zoom} placeholder>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />

        {/* Render fetched Data */}
        {destinationData.map((marker) => (
          <Marker
            position={[
              marker.location.position.latitude,
              marker.location.position.longitude,
            ]}
            icon={customIcon}
          >
            <Popup>
              <h2>{marker.title}</h2>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}
