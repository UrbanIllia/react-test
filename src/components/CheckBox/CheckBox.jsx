import { useState } from "react";
import css from "./CheckBox.module.css";
const CheckBox = () => {
  const [hasAccepted, setHasAccepted] = useState(false);
  const handleChange = (evt) => {
    setHasAccepted(evt.target.checked);
  };
  return (
    <div className={css.wrapper}>
      <label>
        <input
          type="checkbox"
          name="terms"
          checked={hasAccepted}
          onChange={handleChange}
        />
        I accept terms and conditions
      </label>
      <button type="button" disabled={!hasAccepted}>
        Proceed
      </button>
    </div>
  );
};

export default CheckBox;
