// OWN CSS
import "./map.css";

// LEAFLET-REACT COMPONENTS
import { MapContainer, TileLayer } from "react-leaflet";
// LEAFLET-REACT HOOKS
import { useMapEvents } from "react-leaflet/hooks";

// OWN COMPONENTS
import FlyToLocation from "./FlyToLocation";
import RenderMarker from "./RenderMarker";

const MapEventsHandler = ({ handleMapClick }) => {
  useMapEvents({
    click: (e) => handleMapClick(e),
  });
};

export default function MapComponent({ destinationData, onAddCoordinates }) {
  const zoom = 10;
  const center = {
    // Initial coordinates: Matara
    lat: 5.949568,
    lng: 80.544359,
  };

  const handleMapClick = (e) => {
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
        <RenderMarker destinationData={destinationData} />
      </MapContainer>
    </>
  );
}
