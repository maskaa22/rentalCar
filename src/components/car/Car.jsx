import { useEffect, useState } from "react";
import c from "./Car.module.css";

const Car = ({ car }) => {
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

  const address = car.address;
  const parts = address.split(", ");
  const cityCountry = parts.slice(-2).join(" | ");

  const word = `${car.type}`;
  const formattedType =
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

  const mileage = `${car.mileage}`;
  const formattedMileage = mileage.slice(0, 1) + " " + mileage.slice(1);

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
            {cityCountry} | {car.rentalCompany} |
          </p>
          <p className={c.type}>
            {formattedType} | {formattedMileage} km
          </p>
        </div>
      </div>
      <button className={c.btn}>Read more</button>
    </div>
  );
};

export default Car;
