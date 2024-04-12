import React, { useState } from "react";
import axios from "axios";
import Recipes from "./Recipes";
import "./Search.css";

export default function Search() {
  let [text, setText] = useState(null);
  let [recipes, setRecipes] = useState(null);

  function handleResponse(response) {
    setRecipes(response.data);
    console.log(recipes);
  }

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiId = "587e122b";
    let apiKey = "%2079be4e4ac76bdc08f8e645b323b8a033";
    let apiUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${text}&app_id=${apiId}&app_key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="search"
          placeholder="Ex. cookies, tomato.."
          className="input-search"
          onChange={handleChange}
        />
        <input type="button" value="Search" className="input-button" />
      </form>
      <Recipes recipes={recipes} />
    </div>
  );
}
