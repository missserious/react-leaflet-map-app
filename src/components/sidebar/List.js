export default function List({ destinationData }) {
  // destinationData umdrehen
  console.log(destinationData);
  console.log(destinationData.length);
  console.log(destinationData[0]);
  console.log(destinationData[0]);

  return (
    <>
      <div className="list">
        <ul>
          {destinationData.toReversed().map((item) => (
            <li key={item.uuid}>
              Title: {item.title}
              <br />
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
