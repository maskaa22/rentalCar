import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectCars = (state) => state.cars;
export const selectLoading = (state) => state.cars.loading;
export const selectError = (state) => state.cars.error;

export const selectFilteredCars = createSelector(
  [selectCars, selectNameFilter],
  (carsState, filters) => {
    const allCars = carsState.items;

    if (!filters || Object.keys(filters).length === 0) {
      return allCars;
    }

    return allCars.filter((car) => {
      let match = true;

      if (filters.brand) {
        if (!car.brand) {
          match = false;
        }
      }

      if (filters.price) {
        if (Number(car.rentalPrice) !== Number(filters.price)) {
          match = false;
        }
      }

      if (filters.minMileage) {
        if (car.mileage < Number(filters.minMileage)) {
          match = false;
        }
      }
      if (filters.maxMileage) {
        if (car.mileage > Number(filters.maxMileage)) {
          match = false;
        }
      }

      return match;
    });
  }
);
