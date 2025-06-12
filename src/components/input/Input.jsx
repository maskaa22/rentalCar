import { useRef } from "react";
import c from "./Input.module.css";

const Input = ({ prefix, value, onChange }) => {
  const inputRef = useRef(null);

  const handleFocus = (e) => {
    if (e.target.selectionStart < prefix.length) {
      setTimeout(() => {
        inputRef.current.setSelectionRange(prefix.length, prefix.length);
      }, 0);
    }
  };

  const handleClick = (e) => {
    if (e.target.selectionStart < prefix.length) {
      e.preventDefault();
      setTimeout(() => {
        inputRef.current.setSelectionRange(prefix.length, prefix.length);
      }, 0);
    }
  };

  const handleChangeInput = (e) => {
    let val = e.target.value;

    if (!val.startsWith(prefix)) {
      val = prefix;
    }

    const contentAfterPrefix = val.substring(prefix.length);

    const filteredContent = contentAfterPrefix.replace(/[^0-9]/g, "");

    if (onChange) {
      onChange({ target: { value: prefix + filteredContent } });
    }
  };

  return (
    <input
      className={c.input}
      ref={inputRef}
      type="text"
      value={value || prefix}
      onChange={handleChangeInput}
      onFocus={handleFocus}
      onClick={handleClick}
    />
  );
};

export default Input;
