import c from "./Search.module.css";
import Input from "../input/Input";
import CustomSelect from "../customSelect/CustomSelect";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrands } from "../../redux/brands/operations";
import { selectBrands } from "../../redux/brands/selectors";
import { changeFilter } from "../../redux/filters/slice";
import { price } from "../../constants/constants";
import { handleChangeBrand, handleChangeFrom, handleChangePrice, handleChangeTo } from "../../utils/SearchFunctions";

const Search = () => {
  const dispatch = useDispatch();
  const options = useSelector(selectBrands);

  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [mileageFrom, setMileageFrom] = useState("");
  const [mileageTo, setMileageTo] = useState("");

  const brands =
    options &&
    options.map((category) => ({
      value: category,
      label: category,
    }));

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  const handleSubmit = () => {
    const filters = {};
    if (selectedBrand) {
      filters.brand = selectedBrand.value;
    }
    if (selectedPrice) {
      filters.price = selectedPrice.value;
    }
    if (mileageFrom) {
      filters.minMileage = Number(mileageFrom);
    }
    if (mileageTo) {
      filters.maxMileage = Number(mileageTo);
    }

    dispatch(changeFilter(filters));
  };

  return (
    <div className={c.search}>
      <div className={c.select}>
        <label htmlFor="brand" className={c.label}>
          Car brand
        </label>
        <CustomSelect
          options={brands}
          selectedOption={selectedBrand}
          handleChange={(e) => handleChangeBrand(e, setSelectedBrand)}
          inputId="brand"
          placeholder="Choose a brand"
          name="brand"
        />
      </div>
      <div className={c.select}>
        <label htmlFor="price" className={c.label}>
          Price/ 1 hour
        </label>
        <CustomSelect
          options={price}
          selectedOption={selectedPrice}
          handleChange={(e) => handleChangePrice(e, setSelectedPrice)}
          inputId="price"
          placeholder="Choose a price"
          name="price"
          prefix="To $"
        />
      </div>
      <div className={c.mileage}>
        <label className={c.label}>Сar mileage / km</label>
        <Input
          prefix="From "
          value={"From " + mileageFrom}
          onChange={(e) => handleChangeFrom(e, setMileageFrom)}
        />
        <Input
          prefix="To "
          value={"To " + mileageTo}
          onChange={(e) => handleChangeTo(e, setMileageTo)}
        />
      </div>
      <button className={c.btn} onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
};

export default Search;
