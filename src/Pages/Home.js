import React from "react";
import style from "./home.module.scss";

import Background from "../Components/Background";

import coracao from "../Images/GBL-coracao-vida.webp";
import avatar from "../Images/GBL-avatar.webp";
import nuvemTriangulo from "../Images/GBL-nuvem-triangulo.webp";
import arvoreBolas from "../Images/GBL-arvore-bolas.webp";
import moeda from "../Images/GBL-moeda.webp";
import terra from "../Images/GBL-terra.webp";
import trofeu from "../Images/GBL-trofeu.webp";
import coelho from "../Images/GBL-coelho.webp";

function Home() {
  return (
    <div className={style.home_container}>
      <div className={style.home_el_topo_box}>
        <div className={style.home_el_moeda}>
          <img
          src={moeda}
          alt="moeda de pixel"
          className={style.home_moeda}
          />
          <p>1250</p>
        </div>
        <img
          src={coracao}
          alt="vidas de coração de pixel"
          className={style.home_coracao}
        />
      </div>
      <div className={style.home_titulo_box}>
        <img
        src={trofeu}
        alt="troféu de pixel"
        className={style.home_trofeu}
        />
        <div className={style.home_titulo}>
          <h1>Game Box</h1>
          <h2>by Lili</h2>
        </div>
      </div>
      <img
      src={arvoreBolas}
      alt="árvore de bolas de pixel"
      className={style.home_arvoreBolas}
        />
      <img
      src={coelho}
      alt="coelho de pixel"
      className={style.home_coelho}
        />
      <img
        src={nuvemTriangulo}
        alt="nuvem de pixel"
        className={style.home_nuvemTriangulo}
        />
      <img
      src={avatar}
      alt="avatar de pixel"
      className={style.home_avatar}
      />
        <img
        src={terra}
        alt="chão de pixel"
        className={style.home_terra}
        />
      {/*<img
        src={arvoreBolas}
        alt="árvore de bolas de pixel"
        className={style.home_arvore}
      />*/}
      <img
        src={nuvemTriangulo}
        alt="nuvem em forma de triângulo de pixel"
        className={style.home_nuvem2}
      />

      <Background page="home" />
    </div>
  );
}

export default Home;