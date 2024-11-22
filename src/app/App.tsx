import "./styles/index.scss";
import { Route, Routes } from "react-router-dom";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { Link } from "react-router-dom";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { classNames } from "shared/lib/classNames/classNames";
import { Suspense } from "react";
import { AppRouter } from "./providers/router";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={() => toggleTheme()}>Toggle </button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О нас</Link>
      <AppRouter />
    </div>
  );
}

export default App;
