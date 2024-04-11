import React from "react";

export default function Recipes(props) {
  if (props.recipes) {
    console.log(props.recipes);
    return (
      <div className="Recipes">
        <h2>We've found some results for you😋</h2>
        {props.recipes.results.map(function (recipe, index) {
          return (
            <div key={index}>
              <img src={recipe.image} alt={recipe.title} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
