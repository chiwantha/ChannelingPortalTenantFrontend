import React from "react";

const TopImageContainer = ({ image, url }) => {
  return (
    <div className="w-full bg-cover rounded-lg overflow-hidden shadow-md">
      <img
        src={image ? image : url}
        alt=""
        className="aspect-auto rounded-lg"
      />
    </div>
  );
};

export default TopImageContainer;
