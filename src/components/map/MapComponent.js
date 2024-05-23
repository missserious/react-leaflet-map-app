// LEAFLET-REACT COMPONENTS
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// LEAFLET-REACT HOOKS
import { useMapEvents } from "react-leaflet/hooks";

// LEAFLET COMPONENTS
import { Icon } from "leaflet";

// OWN COMPONENTS
import FlyToLocation from "./FlyToLocation";

const MapEventsHandler = ({ handleMapClick }) => {
  useMapEvents({
    click: (e) => handleMapClick(e),
  });
};

export default function MapComponent({ destinationData, onAddCoordinates }) {
  const zoom = 10;
  const center = {
    // Coordinates Matara
    lat: 5.949568,
    lng: 80.544359,
  };

  const customIcon = new Icon({
    iconUrl: require("./location.png"),
    iconSize: [38, 38], // size of icon
  });

  const handleMapClick = (e) => {
    // const { lat, lng } = e.latlng;
    // console.log(e.latlng);
    // alert(`Clicked at: ${lat}, ${lng}`);
    onAddCoordinates(e.latlng);
  };

  return (
    <>
      <MapContainer center={center} zoom={zoom} placeholder>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />

        <FlyToLocation />
        <MapEventsHandler handleMapClick={handleMapClick} />

        {/* TODO: in eigene Komponente */}
        {/* Render fetched Data */}
        {destinationData.map((marker) => (
          <Marker
            key={marker.uuid}
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
