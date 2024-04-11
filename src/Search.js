import React, { useState } from "react";
import axios from "axios";
import Recipes from "./Recipes";
import "./Search.css";

export default function Search() {
  let [text, setText] = useState(null);
  let [recipe, setRecipe] = useState(null);

  function handleResponse(response) {
    setRecipe(response.data);
  }

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "f5d58339ffc84d67b18efd9c3bb8f130";
    let apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${text}`;

    axios.get(apiUrl).then(handleResponse);
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
      <Recipes recipe={recipe}/>
    </div>
  );
}
