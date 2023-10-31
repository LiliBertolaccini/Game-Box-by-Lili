import React from "react";
import style from "./gameDetails.module.scss";
import Background from "../Components/Background";


export default function GameDetails() {
  return (
    <div className={style.gameDetails_container}>
      <Background page="jogo" />
    </div>
  );
}
