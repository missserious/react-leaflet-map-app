// LEAFLET-REACT COMPONENTS
import { Marker, Popup } from "react-leaflet";

// LEAFLET COMPONENTS
import { Icon } from "leaflet";

export default function RenderMarker({ destinationData }) {
  const customIcon = new Icon({
    iconUrl: require("./location.png"),
    iconSize: [38, 38], // size of icon
  });

  return (
    <>
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
            <h4>{marker.title}</h4>
            <br />
            <span>Date: {marker.date}</span>
            <br />
            <span>Time: {marker.time}</span>
            <br />
            <span>Duration: {marker.duration}</span>
          </Popup>
        </Marker>
      ))}
    </>
  );
}
