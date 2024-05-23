// OWN CSS
import "./list.css";

export default function List({ destinationData }) {
  return (
    <>
      <div className="list">
        <ul className="sessions">
          {destinationData.toReversed().map((item) => (
            <li key={item.uuid} className="session">
              <strong>{item.title}</strong>
              <br />
              Duration: {item.duration}
              <br />
              Latitude: {item.location.position.latitude}
              <br />
              Longitude: {item.location.position.longitude}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
