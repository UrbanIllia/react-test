import css from "./Filter.module.css";

const Filter = () => {
  return (
    <div>
      <p className={css.label}>Search by name</p>
      <input type="text" />
    </div>
  );
};

export default Filter;
// onChange={(e) => onFilter(e.target.value)}
// value = { value };
