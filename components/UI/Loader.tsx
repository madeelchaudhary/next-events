import React from "react";
import Loading from "../Icons/loading";

const Loader = () => {
  return (
    <div
      className="flex gap-5 my-5 mt-10 max-w-fit mx-auto text-gray-200 text-3xl"
      role="status"
    >
      <Loading />
      <h2>Loading...</h2>
    </div>
  );
};

export default Loader;
