// this component is a representation of a image in out application
// it will be used to and map over to generate the pictures for the application
import React from "react";
const Photo = props => {
  const { imgDet } = props;
  return (
    <li>
      <img
        src={`https://farm${imgDet.farm}.staticflickr.com/${imgDet.server}/${
          imgDet.id
        }_${imgDet.secret}.jpg`}
        alt=""
      />
    </li>
  );
};

export default Photo;
