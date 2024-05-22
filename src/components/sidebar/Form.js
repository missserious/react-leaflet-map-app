// REACT HOOKS
import { useState } from "react";

// FORM CSS
import "./form.css";

// TODO: Form Validation
export default function Form({ onAddDestinations }) {
  /*
   [x] lat & long
   [x] title
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
      title: title,
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
            placeholder="-90° to 90°"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
          />
        </div>
        <div className="form__row">
          <label className="form__label">Longitude</label>
          <input
            className="form__input"
            type="text"
            placeholder="-180° to 180°"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
          />
        </div>
        <div className="form__row">
          <label className="form__label">Title</label>
          <input
            className="form__input"
            type="text"
            placeholder="please, enter a title"
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
