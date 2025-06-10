import React, { useEffect } from "react";
import c from "./CatalogPage.module.css";
import Search from "../../components/search/Search";
import Cars from "../../components/cars/Cars";
import { useDispatch } from "react-redux";
import { fetchCars } from "../../redux/cars/operations";

const CatalogPage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const abortController = new AbortController();
    dispatch(fetchCars({ signal: abortController.signal }))
  }, [dispatch])

  return <div className="container">
    <Search/>
    <Cars/>
  </div>;
};

export default CatalogPage;
