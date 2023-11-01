import React from "react";
import style from "./games.module.scss";

import Background from "../Components/Background";

import nuvemTriangulo from "../Images/GBL-nuvem-triangulo.webp";
import nuvemCumprida from "../Images/GBL-nuvem-cumprida.webp";
import arrow from '../Images/GBL-seta.webp';
import avatar from "../Images/GBL-avatar.webp";
import cogumelo from "../Images/GBL-cogumelo.webp";
//import coelho from "../Images/GBL-coelho.webp";
import trofeu from "../Images/GBL-trofeu.webp";
import terra from "../Images/GBL-terra.webp";
import dog from "../Images/GBL-dog.webp";
import arvoreCheia from "../Images/GBL-arvore-cheia.webp";



function Games() {
  return (
    <div className={style.games_container}>
      <div className={style.games_box}>
        {/*<div className={style.games_nuvemTriangulo}>
        <img src={nuvemTriangulo}
        alt="nuvem de pixel"
        className={style.games_box_nuvemTriangulo}
        />

        </div>*/}
      <img
        src={nuvemTriangulo}
        alt="nuvem de pixel"
        className={style.games_nuvemTriangulo}
      />

      <img
      src={nuvemCumprida}
      alt="nuvem de pixel"
      className={style.games_nuvemCumprida}
      />

        <img
      src={avatar}
      alt="avatar de pixel"
      className={style.games_avatar}
      />

      <img
      src={trofeu}
      alt="trofeu de pixel"
      className={style.games_trofeu}
      />

      <img
      src={dog}
      alt="árvore de grande de pixel"
      className={style.games_dog}
        />

      <img
      src={cogumelo}
      alt="cogumelo de pixel"
      className={style.games_cogumelo}
        />

      <img
      src={arvoreCheia}
      alt="árvore de grande de pixel"
      className={style.games_arvoreCheia}
        />

        <img
        src={terra}
        alt="chão de pixel"
        className={style.games_terra}
        />
      

      </div>
      <Background page="jogo" />
    </div>
  );
}

export default Games;