import { useState } from "react";
import "./App.css";
import style from "./app.module.scss";
import Home from "./Pages/Home";
import Games from "./Pages/Games";
import arrow from "./Images/GBL-seta.webp";
import ProjectDetails from "./Pages/ProjectDetails";
import Final from "./Pages/Final";
import arrowLeft from "./Images/GBL-seta-esquerda.webp";

function App() {
  const [local, setLocal] = useState("home");
  const [hasArrow, setHasArrow] = useState(true);

  //useEffect(() => {});

  const componentPage = () => {
    switch (local) {
      case "home":
        return <Home />;
      case "games":
        return <Games pickedGame={pickedGame} />;
      case "projectDetails":
        return <ProjectDetails />;
      case "final":
        return <Final />;
      default:
        return null;
    }
  };

  const handleClick = () => {
    switch (local) {
      case "home":
        setLocal("games");
        setHasArrow(true);
        break;
      case "games":
        setLocal("projectDetails");
        setHasArrow(true);
        break;
      case "projectDetails":
        setLocal("final");
        setHasArrow(false);
        break;
      default:
        return null;
    }
  };

  const handleClickLeft = () => {
    switch (local) {
      case "home":
        break;
      case "games":
        setLocal("home");
        setHasArrow(true);
        break;
      case "projectDetails":
        setLocal("games");
        setHasArrow(true);
        break;
      case "final":
        setLocal("projectDetails");
        setHasArrow(true);
        break;
      default:
        return null;
    }
  };

  const pickedGame = () => {
    const hasClass = document.querySelector(".games_container");
    return hasClass ? true : false;
  };

  return (
    <main className={style.app_container}>
      <img
        src={arrowLeft}
        alt="arrow"
        className={style.app_arrow}
        style={local === "home" ? { visibility: "hidden" } : {}}
        onClick={handleClickLeft}
      />

      {componentPage()}
      {hasArrow && (
        <img
          src={arrow}
          alt="arrow"
          className={style.app_arrow}
          onClick={handleClick}
        />
      )}
    </main>
  );
}

export default App;
