import React, { useEffect } from "react";
import c from "./CatalogPage.module.css";
import Search from "../../components/search/Search";
import Cars from "../../components/cars/Cars";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/cars/operations";
import { selectCars } from "../../redux/cars/selectors";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const { cars, totalCars, page, totalPages } = useSelector(selectCars);

  useEffect(() => {
    const abortController = new AbortController();
    dispatch(fetchCars({ signal: abortController.signal }));
  }, [dispatch]);

  return (
    <div className="container">
      <Search />
      <Cars cars={cars}/>
      {/* Пагінація  totalCars, page, totalPages  */}
    </div>
  );
};

export default CatalogPage;
