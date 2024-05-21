// CSS
import "leaflet/dist/leaflet.css";
import "./styles.css";

// OWN COMPONENTS
import Form from "./components/sidebar/Form";
import List from "./components/sidebar/List";
import MapComponent from "./components/map/MapComponent";

// CUSTOMIZE HOOKS
import useFetchData from "./hooks/useFetchData";

export default function App() {
  const [loading, destinationData] = useFetchData();

  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : (
        <>
          <div className="map">
            <MapComponent />
          </div>
          <div className="sidebar">
            <Form />
            <List className="list" />
            <ol>
              {destinationData.map((entry) => (
                <li key={entry.title}>
                  Title: {entry.title}, Duration: {entry.duration} <br />
                  Location:
                  <br />
                  Latitude: {entry.location.position.latitude}
                  <br />
                  Longitude: {entry.location.position.longitude}
                </li>
              ))}
            </ol>
          </div>
        </>
      )}
    </>
  );
}
