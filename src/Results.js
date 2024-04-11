import React from "react";
import "./Results.css";

export default function Results(props) {
  let link = `https://api.spoonacular.com/recipes/${props.result.id}/information`;
  return (
    <div className="Results">
      <a href={link} title={props.result.title}></a>
      <img
        src={props.result.image}
        alt={props.result.title}
        className="img-fluid"
      />
    </div>
  );
}
