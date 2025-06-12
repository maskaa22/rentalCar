import Select from "react-select";
import { CustomSelectStyles } from "./CustomSelectStyle";
import {
  CustomDropdownIndicator,
  CustomSingleValue,
} from "./CustomComponentSelect";

const CustomSelect = ({
  options,
  value,
  inputId,
  placeholder,
  name,
  selectedOption,
  handleChange,
  prefix = "",
}) => {
  return (
    <Select
      inputId={inputId}
      defaultValue={selectedOption}
      onChange={handleChange}
      options={options}
      value={value}
      placeholder={placeholder}
      styles={CustomSelectStyles()}
      components={{
        DropdownIndicator: CustomDropdownIndicator,
        SingleValue: (props) => (
          <CustomSingleValue {...props} prefix={prefix} />
        ),
      }}
      name={name}
      isSearchable={false}
    />
  );
};

export default CustomSelect;
