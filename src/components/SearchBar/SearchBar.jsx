import css from "./SearchBar.module.css";
import { useState } from "react";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };
  return (
    <div className={css.wrapper}>
      <input
        className={css.input}
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      <p className={css.text}>{inputValue}</p>
    </div>
  );
};

export default SearchBar;
