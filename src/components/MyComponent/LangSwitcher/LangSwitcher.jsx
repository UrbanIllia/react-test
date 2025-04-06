import css from "./LangSwitcher.module.css";
import { useId } from "react";

const LangSwitcher = ({ value, onSelect }) => {
  const SelectId = useId();

  return (
    <div className={css.wrapp}>
      <label htmlFor={SelectId}>Choose language</label>
      <select
        id={SelectId}
        value={value}
        onChange={(evt) => onSelect(evt.target.value)}
      >
        <option value="en">English</option>
        <option value="uk">Ukrainian</option>
        <option value="pl">Polish</option>
      </select>
    </div>
  );
};

export default LangSwitcher;
