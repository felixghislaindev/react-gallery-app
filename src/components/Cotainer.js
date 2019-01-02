// this component will re responsible redndering images from the props that
// it will receive from app.js
import React from "react";

// importing components
import Photo from "./Photo";
import SearhError from "./NotFound";

const Container = props => {
  // mapping the state into images
  let images;
  if (props.images.length !== 0) {
    images = props.images.map(image => <Photo key={image.id} imgDet={image} />);
  } else {
    images = <SearhError />;
  }

  return (
    <div className="photo-container">
      <h2>{props.title}</h2>
      <ul>{images}</ul>
    </div>
  );
};

export default Container;
