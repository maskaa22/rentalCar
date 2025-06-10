import React from "react";
import c from "./Car.module.css";

const Car = ({car}) => {
  return <div>
    {car.model}
  </div>;
};

export default Car;
