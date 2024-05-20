// LEAFLET COMPONENTS
import { MapContainer, TileLayer } from "react-leaflet";

export default function MapComponent() {
  const zoom = 13;
  const center = {
    lat: 48.999,
    lng: 2.888,
  };

  return (
    <>
      <MapContainer center={center} zoom={zoom} placeholder>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </>
  );
}
