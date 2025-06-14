import React from "react";
import c from "./Loader.module.css";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/loader/selectors";
// import { selectLoading } from "../../redux/cars/selectors";

const Loader = () => {
  const isLoading = useSelector(selectIsLoading);

  // const isLoading = useSelector(state => state.loader)

  if (!isLoading) return null;
  console.log(isLoading);
  


  return (
    <div className={c.backdrop}>
      <div className={c.spinner}></div>
    </div>
  );
};

export default Loader;
