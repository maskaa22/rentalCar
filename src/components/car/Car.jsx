import { useEffect, useState } from "react";
import c from "./Car.module.css";
import { useNavigate } from "react-router-dom";
import { Adress, Mileage, Type } from "../../utils/CarFunctions";

const Car = ({ car }) => {
  const navigate = useNavigate();

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("favorites") || "{}";
    const favorites = JSON.parse(stored);
    setIsFavorite(favorites[car.id]);
  }, [car.id]);

  const toggleFavorite = () => {
    const stored = localStorage.getItem("favorites") || "{}";
    const favorites = JSON.parse(stored);
    const updated = { ...favorites, [car.id]: !favorites[car.id] };
    localStorage.setItem("favorites", JSON.stringify(updated));
    setIsFavorite(!favorites[car.id]);
  };

  return (
    <div className={c.card}>
      <div className={c.imgContainer}>
        <svg
          className={`${c.icon} ${isFavorite ? c.active : ""}`}
          onClick={toggleFavorite}
        >
          <use href="/icons.svg#icon-active"></use>
        </svg>

        <img src={car.img} alt={car.brand} className={c.photo} />
      </div>

      <div className={c.info}>
        <div className={c.title}>
          <p className={c.brand}>
            {car.brand}
            <span className={c.model}> {car.model}, </span>
            {car.year}
          </p>
          <p>${car.rentalPrice}</p>
        </div>
        <div className={c.location}>
          <p>
            {Adress(car)} | {car.rentalCompany} |
          </p>
          <p className={c.type}>
            {Type(car)} | {Mileage(car)} km
          </p>
        </div>
      </div>
      <button className={c.btn} onClick={() => navigate(`/catalog/${car.id}`)}>
        Read more
      </button>
    </div>
  );
};

export default Car;
