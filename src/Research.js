import React from "react";

export default function Research(props) {
  if (props.research.length === 0) {
    return (
      <h3 className="mt-5 text-center">
        Sorry, we couldn't find what you're looking for😫😭
      </h3>
    );
  } else {
    return <h3 className="mt-3">Here what we found😋</h3>;
  }
}
