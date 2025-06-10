import React from "react";
import c from "./Cars.module.css";
import Car from "../car/Car";
import { useSelector } from "react-redux";
import { selectCars } from "../../redux/cars/selectors";

const Cars = () => {
  const { cars, totalCars, page, totalPages } = useSelector(selectCars);

  // console.log(cars, totalCars, page, totalPages );

  return (
    <div>
      {cars?.map((car, i) => (
        <Car key={i} car={car} />
      ))}
    </div>
  );
};

export default Cars;
