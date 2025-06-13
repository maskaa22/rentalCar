import { useRef } from "react";
import c from "./Input.module.css";

const Input = ({
  prefix = "",
  value,
  onChange,
  classInput,
  placeholder,
  name,
}) => {
  const inputRef = useRef(null);

  const isPrefixUsed = prefix.length > 0;

  const handleFocus = (e) => {
    if (isPrefixUsed && e.target.selectionStart < prefix.length) {
      setTimeout(() => {
        inputRef.current.setSelectionRange(prefix.length, prefix.length);
      }, 0);
    }
  };

  const handleClick = (e) => {
    if (isPrefixUsed && e.target.selectionStart < prefix.length) {
      e.preventDefault();
      setTimeout(() => {
        inputRef.current.setSelectionRange(prefix.length, prefix.length);
      }, 0);
    }
  };

  const handleChangeInput = (e) => {
    let val = e.target.value;

    if (isPrefixUsed) {
      if (!val.startsWith(prefix)) {
        val = prefix;
      }

      const contentAfterPrefix = val.substring(prefix.length);

      const filteredContent = contentAfterPrefix.replace(/[^0-9]/g, "");

      if (onChange) {
        onChange({ target: { value: prefix + filteredContent } });
      }
    } else {
      if (onChange) {
        onChange(e);
      }
    }
  };

  return (
    <input
      className={classInput}
      ref={inputRef}
      type="text"
      value={isPrefixUsed ? (value === "" ? prefix : value || prefix) : value}
      onChange={handleChangeInput}
      onFocus={handleFocus}
      onClick={handleClick}
      placeholder={placeholder}
      name={name}
    />
  );
};

export default Input;
