import React from "react";

const Travel = ({ destination, country, photo, distance }) => (
  <figure>
    <img src={photo} alt={country} />
    <figcaption>
      <blockquote>{destination}</blockquote>
      <p>{distance}</p>
    </figcaption>
  </figure>
);

export default Travel;