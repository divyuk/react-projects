import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <>
      <StarRating onSetRating={setMovieRating} />
      <p>This movie was rated as {movieRating}</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={10}
      messages={["Terrible", "Bad", "Ok", "Good", "Average"]}
    />
    <StarRating
      messages={["Terrible", "Bad", "Ok", "Good", "Average"]}
      defaultRating={3}
    />
    <Test />
  </React.StrictMode>
);
