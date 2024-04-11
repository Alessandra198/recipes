import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  let [text, setText] = useState(null);

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(text);
  }
  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Ex. chicken, carbonara.."
          className="input-search"
          onChange={handleChange}
        />
        <input type="button" value="Search" className="input-button" />
      </form>
    </div>
  );
}
