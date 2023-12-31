import React from "react";
import style from "./final.module.scss";

import Background from "../Components/Background";

import avatar from "../Images/GBL-avatar.webp";
import terra from "../Images/GBL-terra.webp";
import nuvemTriangulo from "../Images/GBL-nuvem-triangulo.webp";
import nuvemCumprida from "../Images/GBL-nuvem-cumprida.webp";
//import arvoreCheia from "../Images/GBL-arvore-cheia.webp";
import cogumelo from "../Images/GBL-Cogumelo.webp";
//import coelho from "../Images/GBL-coelho.webp";
import moeda from "../Images/GBL-moeda.webp";
import coracao from "../Images/GBL-coracao-vida.webp";
import tesouro from "../Images/img_jogo_memoria/GBL-tesouro.webp";

export default function Final() {
  return (
    <div className={style.final_container}>

            <div className={style.final_el_topo_box}>
        <div className={style.final_el_moeda}>
          <img
          src={moeda}
          alt="moeda de pixel"
          className={style.final_moeda}
          />
          <p>2000</p>
        </div>
        <img
          src={coracao}
          alt="vidas de coração de pixel"
          className={style.final_coracao}
        />
      </div>
      <div className={style.final_box}>
        <h2>Te aguardo</h2>
        <h2>em outra aventura!</h2>
        <h3>Você pode me encontrar em: </h3>
        <div className={style.final_button_box}>
        <a href="https://www.linkedin.com/in/lilian-barros-bertolaccini/" target="_blank" rel="noreferrer" >Linkedin</a>
        <a href="https://github.com/LiliBertolaccini" target="_blank" rel="noreferrer" >Github</a>
        </div>
      <h4 className={style.final_play_button} onClick={()=>window.location.reload()}>Play Again</h4>
      </div>

      <img
      src={avatar}
      alt="avatar de pixel"
      className={style.final_avatar}
        />

      <img
      src={terra}
      alt="chão de pixel"
      className={style.final_terra}
        />

      <img
        src={nuvemTriangulo}
        alt="nuvem de pixel"
        className={style.final_nuvemTriangulo}
      />

        <img
        src={nuvemCumprida}
        alt="nuvem de pixel"
        className={style.final_nuvemCumprida}
      />

      <img
      src={cogumelo}
      alt="cogumelo de pixel"
      className={style.final_cogumelo}
        />

      <img
      src={tesouro}
      alt="bau do tesouro de pixel"
      className={style.final_tesouro}
        />

      <Background page="final" />
    </div>
  );
}
