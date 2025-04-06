// src/App.jsx
import Product from "./Product";
import LoginForm from "./LoginForm/LoginForm.jsx";
import MyComponent from "./MyComponent/MyComponent.jsx";
import SearchBar from "./SearchBar/SearchBar.jsx";
import LangSwitcher from "./MyComponent/LangSwitcher/LangSwitcher.jsx";

export default function App() {
  const handleLogin = (userData) => {
    console.log(userData);
  };
  const handleLogin1 = (userData1) => {
    console.log(userData1);
  };
  return (
    <div>
      <h1>Best selling</h1>

      <Product />
      <Product />
      <Product />
      <Product />
      <LoginForm onLogin={handleLogin} />
      <MyComponent onLogin1={handleLogin1} />
      <SearchBar />
      <LangSwitcher />
    </div>
  );
}
