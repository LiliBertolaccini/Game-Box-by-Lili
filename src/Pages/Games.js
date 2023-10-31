import React from "react";
import style from "./games.module.scss";
import Background from "../Components/Background";


function Games() {
  return (
    <div className={style.games_container}>
      <Background page="jogo" />
    </div>
  );
}

export default Games;