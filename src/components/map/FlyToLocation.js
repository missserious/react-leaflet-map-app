// LEAFLET HOOK
import { useMap } from "react-leaflet/hooks";
// REACT HOOKS
import { useEffect } from "react";

export default function FlyToLocation() {
  // const [position, setPosition] = useState(null);
  const map = useMap();
  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      // setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
      // map.setView([13.5, 5.5], 10);
    });
  }, [map]);
  return null;
}
