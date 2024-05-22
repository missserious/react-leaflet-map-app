// LIST CSS
import "./list.css";

export default function List({ destinationData }) {
  return (
    <>
      <div className="list">
        <ul class="sessions">
          {destinationData.toReversed().map((item) => (
            <li key={item.uuid} class="session">
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
