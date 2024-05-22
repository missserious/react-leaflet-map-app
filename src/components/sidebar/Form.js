// REACT HOOKS
import { useState } from "react";

import "./form.css";

export default function Form({ onAddDestinations }) {
  /*
   * lat & long
   * title
   * duration
   * date
   * time
   * duration
   * description
   * rating (stars)
   *
   */
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !longitude || !latitude) return;

    const newDestination = {
      uuid: Date.now(),
      title,
      duration: "3",
      location: {
        position: {
          latitude: latitude,
          longitude: longitude,
        },
      },
    };
    // console.log(newDestination);
    onAddDestinations(newDestination);

    setLatitude("");
    setLongitude("");
    setTitle("");
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__row">
          <label className="form__label">Latitude</label>
          <input
            className="form__input"
            type="text"
            placeholder="latitude"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
          />
        </div>
        <div className="form__row">
          <label className="form__label">Longitude</label>
          <input
            className="form__input"
            type="text"
            placeholder="longitude"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
          />
        </div>
        <div className="form__row">
          <label className="form__label">Title</label>
          <input
            className="form__input"
            type="text"
            placeholder="placeholder"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form__row">
          <button className="form__button">Add</button>
        </div>
      </form>
    </>
  );
}
