import css from "./LangSwitcher.module.css";
import { useId } from "react";
import { useState } from "react";

const LangSwitcher = () => {
  const SelectId = useId();
  const { lang, setLang } = useState("uk");
  return (
    <div className={css.wrapp}>
      <label htmlFor={SelectId}>Choose language</label>
      <select
        id={SelectId}
        value={lang}
        onChange={(evt) => setLang(evt.target.value)}
      >
        <option value="en">English</option>
        <option value="uk">Ukrainian</option>
        <option value="pl">Polish</option>
      </select>
    </div>
  );
};

export default LangSwitcher;
