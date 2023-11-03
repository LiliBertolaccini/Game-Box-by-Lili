import React from "react";
import style from "./gameBox.module.scss";

import tituloP from "../../Images/GBL-elemento-titulo.webp";
import caixa from "../../Images/GBL-elemento-caixa.webp";
import memoria from "../../Images/GBL-estrela.webp";
import piano from "../../Images/GBL-teclado.webp";
import yugi from "../../Images/GBL-yugi.webp";
import ralph from "../../Images/GBL-ralph.webp";

export default function GameBox({ nomeJogo }) {
  let gameImg;

  switch (nomeJogo) {
    case "Ralph":
      gameImg = ralph;
      break;
    case "Jogo da Memória":
      gameImg = memoria;
      break;
    case "Piano":
      gameImg = piano;
      break;
    case "Yu-Gi-Oh!":
      gameImg = yugi;
      break;
    default:
      return null;
  }

  return (
    <div className={style.gameBox_container}>
      <div className={style.gameBox_caixa}>
        <img src={gameImg} alt={`capa do jogo ${nomeJogo}`} />
        <img src={caixa} alt="background da imagem do jogo" />
      </div>
      <div className={style.gameBox_titulo_box}>
        <h3>{nomeJogo}</h3>
        <img src={tituloP} alt="background do titulo do jogo" />
      </div>
    </div>
  );
}
