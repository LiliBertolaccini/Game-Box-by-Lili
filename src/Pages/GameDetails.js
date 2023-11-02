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
      <div className={style.gameDetails_box}>

      <img
      src={avatar}
      alt="avatar de pixel"
      className={style.gameDetails_avatar}
        />

      <img
      src={terra}
      alt="chão de pixel"
      className={style.gameDetails_terra}
        />

      <img
      src={florPink}
      alt="flor pink de pixel"
      className={style.gameDetails_florPink}
        />

      <img
      src={arvoreBola}
      alt="arvore de pixel"
      className={style.gameDetails_arvoreBola}
        />

      <img
      src={coelho}
      alt="coelho de pixel"
      className={style.gameDetails_coelho}
        />

      <img
      src={moeda}
      alt="moeda de pixel"
      className={style.gameDetails_moeda}
        />

      </div>
      <Background page="jogo" />
    </div>
  );
}
