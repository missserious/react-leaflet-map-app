// OWN CSS
import "./form.css";

// REACT HOOKS
import { useState } from "react";

// TODO: Form Validation
export default function Form({
  onAddDestinations,
  coordinates,
  onAddCoordinates,
}) {
  // let d = new Date().getDate();
  // let m = new Date().getMonth();
  // let y = new Date().getFullYear();

  const { lat, lng } = coordinates;
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(
    `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`
  );
  const [time, setTime] = useState(
    `${new Date().getHours()}:${new Date().getMinutes()}`
  );
  const [duration, setDuration] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // if form fields are empty - return
    if (!title || !lat || !lng || !date || !time || !duration) return;

    const newDestination = {
      uuid: Date.now(),
      title: title,
      date: date,
      time: time,
      duration: duration,
      location: {
        position: {
          latitude: lat,
          longitude: lng,
        },
      },
    };
    onAddDestinations(newDestination);

    // reset the form
    onAddCoordinates(0, 0);
    setTitle("");
    setDate(
      `${new Date().getDate().toString()}/${new Date()
        .getMonth()
        .toString()}/${new Date().getFullYear().toString()}`
    );
    setTime(`${new Date().getHours()}:${new Date().getMinutes()}`);
    setDuration("");
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__row">
          <label className="form__label">Title</label>
          <input
            className="form__input"
            type="text"
            placeholder="Please, enter a title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form__row">
          <label className="form__label">Date</label>
          <input
            className="form__input"
            type="text"
            placeholder="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="form__row">
          <label className="form__label">Time</label>
          <input
            className="form__input"
            type="text"
            placeholder="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="form__row">
          <label className="form__label">Duration</label>
          <input
            className="form__input"
            type="text"
            placeholder="Please, enter a duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>

        <div className="form__row">
          <div className="form__label">Latitude</div>
          <div className="coordinates">{lat}</div>
        </div>
        <div className="form__row">
          <div className="form__label">Longitude</div>
          <div className="coordinates">{lng}</div>
        </div>

        <div className="form__row">
          <button className="form__button">Add</button>
        </div>
      </form>
    </>
  );
}
