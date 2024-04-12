import React from "react";
import Results from "./Results";

import "./Recipes.css";

export default function Recipes(props) {
  if (props.recipes) {
    return (
      <div className="Recipes">
        <h3 className="mt-4">Here's what we found😋</h3>
        <div className="row">
          {props.recipes.hits.map(function (recipe, index) {
            return (
              <div key={index} className="col-6 col-md-3 mt-3">
                <Results hits={recipe} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
