import c from "./Cars.module.css";
import Car from "../car/Car";

const Cars = ({ cars }) => {
  return (
    <div className={c.list}>
      {cars?.map((car, i) => (
        <Car key={i} car={car} />
      ))}
    </div>
  );
};

export default Cars;
