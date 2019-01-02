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
