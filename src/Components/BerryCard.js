import React from "react";

const BerryCard = ({ currentBerry }) => {
  return (
    <div>
      <h2>{currentBerry.name}</h2>
      <h2>{currentBerry.firmness.name}</h2>
    </div>
  );
};

export default BerryCard;
