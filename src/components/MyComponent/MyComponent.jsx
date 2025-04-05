import { useId } from "react";
import css from "./MyComponent.module.css";

const MyComponent = ({ onLogin1 }) => {
  const loginId = useId();
  const passwordId = useId();
  console.log(passwordId);
  console.log(loginId);
  const handleSubmit2 = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const { login, password } = form.elements;
    onLogin1({
      login: login.value,
      password: password.value,
    });
  };
  return (
    <form className={css.wrapper} onSubmit={handleSubmit2}>
      <label className={css.label} htmlFor={loginId}></label>
      <input className={css.input} name="login" type="text" id={loginId} />
      <label className={css.label} htmlFor={passwordId}></label>
      <input
        className={css.input}
        name="password"
        type="password"
        id={passwordId}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default MyComponent;
