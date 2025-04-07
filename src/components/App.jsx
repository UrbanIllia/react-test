// src/App.jsx
import Product from "./Product";
import LoginForm from "./LoginForm/LoginForm.jsx";
import MyComponent from "./MyComponent/MyComponent.jsx";
import SearchBar from "./SearchBar/SearchBar.jsx";
import LangSwitcher from "./MyComponent/LangSwitcher/LangSwitcher.jsx";
import Radio from "./Radio/Radio.jsx";
import CheckBox from "./CheckBox/CheckBox.jsx";
import App1 from "./App1/App1.jsx";
import { useState } from "react";

export default function App() {
  const handleLogin = (userData) => {
    console.log(userData);
  };
  const handleLogin1 = (userData1) => {
    console.log(userData1);
  };
  const { lang, setLang } = useState("uk");
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
      <p>Selected language: {lang}</p>
      <LangSwitcher value={lang} onSelect={setLang} />
      <Radio />
      <CheckBox />
      <App1 />
    </div>
  );
}
