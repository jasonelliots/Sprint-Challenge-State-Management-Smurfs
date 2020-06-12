import React, { useContext } from "react";

import { listContext } from "../contexts/listContext";

export const SmurfList = () => {
  const { smurfs } = useContext(listContext);

  return (
    <>
      {smurfs.map((smurf) => {
        return (
          <div>
            <h2>Name: {smurf.name} </h2>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
          </div>
        );
      })}
    </>
  );
};
