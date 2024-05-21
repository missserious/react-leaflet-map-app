export default function List({ destinationData }) {
  return (
    <>
      <div className="list">
        <ul>
          {destinationData.reverse().map((item) => (
            <li key={item.uuid}>
              Title: {item.title}, Duration: {item.duration} <br />
              Location:
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
