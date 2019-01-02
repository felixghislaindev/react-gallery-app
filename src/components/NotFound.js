// this componenet will be used to render an error message when
// the serach made by the user does not have any result
import React from "react";
const NotFound = () => {
  return (
    <li className="not-found">
      <h3>No Results Found</h3>
      <p>You search did not return any results. Please try again.</p>
    </li>
  );
};

export default NotFound;
