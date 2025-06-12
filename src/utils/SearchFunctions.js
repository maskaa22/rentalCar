export const handleChangeBrand = (e, setSelectedBrand) => {
  setSelectedBrand(e);
};
export const handleChangePrice = (e, setSelectedPrice) => {
  setSelectedPrice(e);
};
export const handleChangeFrom = (e, setMileageFrom) => {
  const valueWithoutPrefix = e.target.value.replace("From ", "");
  setMileageFrom(valueWithoutPrefix);
};
export const handleChangeTo = (e, setMileageTo) => {
  const valueWithoutPrefix = e.target.value.replace("To ", "");
  setMileageTo(valueWithoutPrefix);
};
