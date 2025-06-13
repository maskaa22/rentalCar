import { useEffect } from "react";
import c from "./CatalogDetailPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneCar } from "../../redux/cars/operations";
import { useParams } from "react-router-dom";
import { selectOneCar } from "../../redux/cars/selectors";
import { Adress, Mileage, Type } from "../../utils/CarFunctions";
import Form from "../../components/form/Form";

const CatalogDetailPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const car = useSelector(selectOneCar);

  useEffect(() => {
    dispatch(fetchOneCar(params.id));
  }, [dispatch, params.id]);

  const strId = car?.id;
  const id = strId?.split("-");

  return (
    <div className="container">
      {car && (
        <div className={c.innerContainer}>
          <div className={c.formContainer}>
            <div className={c.imgContainer}>
              <img src={car.img} alt={car.brand} className={c.img} />
            </div>
            <Form />
          </div>
          <div className={c.info}>
            <h2 className={c.title}>
              {car.brand} {car.model}, {car.year}
              <span> id: {id && id[2]}</span>
            </h2>
            <div className={c.adressContainer}>
              <p className={c.adress}>
                <svg className={c.icon}>
                  <use href="/icons.svg#icon-Location" className={c.icon}></use>
                </svg>
                {Adress(car, "flag")}
              </p>
              <p className={c.mileage}>Mileage: {Mileage(car)} km</p>
            </div>
            <p className={c.price}>${car.rentalPrice}</p>
            <p className={c.description}>{car.description}</p>
            <p className={c.rental}>Rental Conditions:</p>
            <ul className={c.rentalList}>
              {car.rentalConditions?.map((item, i) => (
                <li key={i} className={c.rentalItem}>
                  <svg className={c.icon}>
                    <use
                      href="/icons.svg#icon-check-circle"
                      className={c.icon}
                    ></use>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <p className={c.specifications}>Car Specifications:</p>
            <ul className={c.specificationsList}>
              <li className={c.specificationsItem}>
                <svg className={c.icon}>
                  <use href="/icons.svg#icon-calendar" className={c.icon}></use>
                </svg>
                Year: {car.year}
              </li>
              <li className={c.specificationsItem}>
                <svg className={c.icon}>
                  <use href="/icons.svg#icon-car" className={c.icon}></use>
                </svg>
                Type: {Type(car)}
              </li>
              <li className={c.specificationsItem}>
                <svg className={c.icon}>
                  <use
                    href="/icons.svg#icon-fuel-pump"
                    className={c.icon}
                  ></use>
                </svg>
                Fuel Consumption: {car.fuelConsumption}
              </li>
              <li className={c.specificationsItem}>
                <svg className={c.icon}>
                  <use href="/icons.svg#icon-gear" className={c.icon}></use>
                </svg>
                Engine Size: {car.engineSize}
              </li>
            </ul>

            <p className={c.accessories}>Accessories and functionalities:</p>
            <ul className={c.accessoriesList}>
              {car.accessories?.map((item, i) => (
                <li key={i} className={c.accessoriesItem}>
                  <svg className={c.icon}>
                    <use
                      href="/icons.svg#icon-check-circle"
                      className={c.icon}
                    ></use>
                  </svg>
                  {item}
                </li>
              ))}
              {car.functionalities?.map((item, i) => (
                <li key={i} className={c.accessoriesItem}>
                  <svg className={c.icon}>
                    <use
                      href="/icons.svg#icon-check-circle"
                      className={c.icon}
                    ></use>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CatalogDetailPage;
