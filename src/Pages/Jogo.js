import React from "react";
import style from "./jogo.module.scss";

import terra from "../Images/GBL-terra.webp";
//import cogumelo from "../Images/GBL-Cogumelo.webp";
import avatar from "../Images/GBL-avatar.webp";
import nuvemTriangulo from "../Images/GBL-nuvem-triangulo.webp";
import dog from "../Images/GBL-dog.webp";
import arvoreBola from "../Images/GBL-arvore-bolas.webp";
import Background from "../Components/Background";

export default function Jogo({game}) {
  return (
    <div className={style.jogo_container}>
      <div className={style.jogo_game_box}>
        <iframe  className={style.jogo_game_iframe} src="/Jogo/Ralph/index.html"
        title="Ralph"
        ></iframe>
      </div>
      
      <img
        src={terra}
        alt="chão de pixel"
        className={style.jogo_terra}
      />

      <img
        src={avatar}
        alt="avatar de pixel"
        className={style.jogo_avatar}
      />

      <img
        src={nuvemTriangulo}
        alt="nuvem de pixel"
        className={style.jogo_nuvemTriangulo}
      />

      <img
        src={dog}
        alt="árvore de grande de pixel"
        className={style.jogo_dog}
      />

    <img
      src={arvoreBola}
      alt="árvore de bolas de pixel"
      className={style.jogo_arvoreBola}
    />

    <Background page="jogo"/>
    </div>
  );
}
