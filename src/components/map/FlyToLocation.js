// LEAFLET HOOKS
import { useMap } from "react-leaflet/hooks";
// REACT HOOKS
import { useEffect } from "react";

export default function FlyToLocation() {
  const map = useMap();
  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      map.flyTo(e.latlng, map.getZoom());
    });
  }, [map]);
  return null;
}
