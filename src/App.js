// CSS
import "leaflet/dist/leaflet.css";
import "./styles.css";

// OWN COMPONENTS
import Form from "./components/sidebar/Form";
import List from "./components/sidebar/List";
import MapComponent from "./components/map/MapComponent";

// REACT HOOKS
import React, { useState } from "react";

function App() {
  return (
    <>
      <div className="map">
        <MapComponent />
      </div>

      <div className="sidebar">
        <Form />
        <List className="list" />
      </div>
    </>
  );
}

export default App;
