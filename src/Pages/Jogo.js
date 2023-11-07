import React from "react";
import style from "./jogo.module.scss";

import terra from "../Images/GBL-terra.webp";
import cogumelo from "../Images/GBL-Cogumelo.webp";
import avatar from "../Images/GBL-avatar.webp";
import nuvemTriangulo from "../Images/GBL-nuvem-triangulo.webp";
import dog from "../Images/GBL-dog.webp";
import arvoreBola from "../Images/GBL-arvore-bolas.webp";



export default function Jogo() {
  return (
    <div className={style.jogo_container}>
      <img src={terra} alt="chão de pixel" className={style.games_terra} />
      <img src={avatar} alt="avatar de pixel" className={style.jogo_avatar} />

      <img
        src={cogumelo}
        alt="cogumelo de pixel"
        className={style.jogo_cogumelo}
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
    </div>
  );
}
