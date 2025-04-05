import css from "./LoginForm.module.css";

const LoginForm = ({ onLogin }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const { login, password } = form.elements;
    onLogin({
      login: login.value,
      password: password.value,
    });
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input type="text" name="login" className={css.inputLogin} />
      <input type="password" name="password" className={css.inputPassword} />
      <button className={css.btn}>Hello!</button>
    </form>
  );
};

export default LoginForm;
