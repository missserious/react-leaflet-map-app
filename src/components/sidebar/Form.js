// REACT HOOKS
import { useState } from "react";

export default function Form({ onAddDestinations }) {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title) return;

    const newDestination = {
      uuid: Date.now(),
      title,
      duration: "3",
      location: {
        position: {
          latitude: 50.516,
          longitude: 13.636,
        },
      },
    };
    // console.log(newDestination);

    onAddDestinations(newDestination);

    setTitle("");
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Form</h1>
        <input
          type="text"
          placeholder="title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button>Add</button>
      </form>
    </>
  );
}
