import React from "react";
import "./Results.css";

export default function Results(props) {
  return (
    <div className="Results">
      <a
        href={props.hits.recipe.url}
        title={props.hits.recipe.label}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={props.hits.recipe.image}
          alt={props.hits.recipe.label}
          className="img-fluid"
        />
      </a>
    </div>
  );
}
