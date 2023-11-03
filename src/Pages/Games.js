import React from "react";
import style from "./games.module.scss";

import Background from "../Components/Background";

import nuvemTriangulo from "../Images/GBL-nuvem-triangulo.webp";
import nuvemCumprida from "../Images/GBL-nuvem-cumprida.webp";
import avatar from "../Images/GBL-avatar.webp";
import cogumelo from "../Images/GBL-Cogumelo.webp";
//import coelho from "../Images/GBL-coelho.webp";
//import trofeu from "../Images/GBL-trofeu.webp";
import terra from "../Images/GBL-terra.webp";
import dog from "../Images/GBL-dog.webp";
import arvoreCheia from "../Images/GBL-arvore-cheia.webp";
import moeda from "../Images/GBL-moeda.webp";
import coracao from "../Images/GBL-coracao-vida.webp";

function Games() {
  return (
    <div className={style.games_container}>
      <div className={style.games_el_topo_box}>
        <div className={style.games_el_moeda}>
          <img src={moeda} alt="moeda de pixel" className={style.games_moeda} />
          <p>1355</p>
        </div>
        <img
          src={coracao}
          alt="vidas de coração de pixel"
          className={style.games_coracao}
        />
      </div>
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

      <img src={terra} alt="chão de pixel" className={style.games_terra} />

      <Background page="jogo" />
    </div>
  );
}

export default Games;
