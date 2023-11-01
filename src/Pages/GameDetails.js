import React from "react";
import style from "./gameDetails.module.scss";

import Background from "../Components/Background";

import arrow from '../Images/GBL-seta.webp';
import avatar from "../Images/GBL-avatar.webp";
import terra from "../Images/GBL-terra.webp";
//import florRosa from "../Images/GBL-florRosa.webp";
import florPink from "../Images/GBL-florPink.webp";
import arvoreBola from "../Images/GBL-arvore-bolas.webp";
import moeda from "../Images/GBL-moeda.webp";
import coelho from "../Images/GBL-coelho.webp";



export default function GameDetails() {
  return (
    <div className={style.gameDetails_container}>
      <Background page="jogo" />
    </div>
  );
}
