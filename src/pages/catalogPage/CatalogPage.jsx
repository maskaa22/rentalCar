import React from "react";
import c from "./CatalogPage.module.css";
import Search from "../../components/search/Search";
import Cars from "../../components/cars/Cars";

const CatalogPage = () => {
  return <div className="container">
    <Search/>
    <Cars/>
  </div>;
};

export default CatalogPage;
