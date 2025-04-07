import { useState } from "react";
import css from "./Radio.module.css";

const Radio = () => {
  const [coffeeSize, setCoffeeSize] = useState("sm");
  const handleSizeChange = (evt) => {
    setCoffeeSize(evt.target.value);
  };
  return (
    <form className={css.form}>
      <h1 className={css.title}>Select coffee size</h1>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="sm"
          checked={coffeeSize === "sm"}
          onChange={handleSizeChange}
        />
        Small
      </label>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="md"
          checked={coffeeSize === "md"}
          onChange={handleSizeChange}
        />
        Medium
      </label>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="lg"
          checked={coffeeSize === "lg"}
          onChange={handleSizeChange}
        />
        Large
      </label>
    </form>
  );
};

export default Radio;
