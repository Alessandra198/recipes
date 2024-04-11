import React from "react";

export default function Recipes(props) {
  if (props.recipe) {
    return (
      <div className="Recipes">
        <h2>We've found some results for you😋</h2>
      </div>
    );
  } else {
    return null;
  }
}
