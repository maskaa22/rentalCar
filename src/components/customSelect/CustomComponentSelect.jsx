import { components } from "react-select";
import c from "./CustomSelect.module.css";

export const CustomDropdownIndicator = (props) => {
  const { menuIsOpen } = props.selectProps;
  return (
    <components.DropdownIndicator {...props}>
      {menuIsOpen ? (
        <svg className={c.icon}>
          <use href="/icons.svg#icon-up"></use>
        </svg>
      ) : (
        <svg className={c.icon}>
          <use href="/icons.svg#icon-down"></use>
        </svg>
      )}
    </components.DropdownIndicator>
  );
};

export const CustomSingleValue = ({ data, prefix, ...props }) => (
  <components.SingleValue {...props}>
    {prefix ? `${prefix}${data.label}` : data.label}
  </components.SingleValue>
);
