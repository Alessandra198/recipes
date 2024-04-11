import React from "react";
import Results from "./Results";
import Research from "./Research";

import "./Recipes.css";

export default function Recipes(props) {
  if (props.recipes) {
    return (
      <div className="Recipes">
        <Research research={props.recipes.results} />
        <div className="row">
          {props.recipes.results.map(function (recipe, index) {
            return (
              <div key={index} className="col-4 mt-3">
                <Results result={recipe} />
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
