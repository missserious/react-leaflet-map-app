// CSS
import "leaflet/dist/leaflet.css";
import "./styles.css";

// OWN COMPONENTS
import Form from "./components/sidebar/Form";
import List from "./components/sidebar/List";
import MapComponent from "./components/map/MapComponent";

// REACT HOOKS
import { useState } from "react";

// CUSTOMIZE HOOKS
import useFetchData from "./hooks/useFetchData";

export default function App() {
  const [destinations, setDestinations] = useState([]);

  const loading = useFetchData({ setDestinations });

  function handleAddDestinations(destination) {
    setDestinations((destinations) => [...destinations, destination]);
  }

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
            <Form onAddDestinations={handleAddDestinations} />
            <List className="list" destinationData={destinations} />
          </div>
        </>
      )}
    </>
  );
}
