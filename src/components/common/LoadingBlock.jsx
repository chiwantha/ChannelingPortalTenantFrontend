import React from "react";
import Loading from "../../assets/res/loading.gif";

const LoadingBlock = () => {
  return (
    <div>
      <img
        src={Loading}
        alt="loading.gif"
        width={100}
        height={100}
        className="aspect-square"
      />
    </div>
  );
};

export default LoadingBlock;
