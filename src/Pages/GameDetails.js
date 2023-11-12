import React, { useState } from "react";
import style from "./gameDetails.module.scss";

import Background from "../Components/Background";

import avatar from "../Images/GBL-avatar.webp";
import terra from "../Images/GBL-terra.webp";
//import florRosa from "../Images/GBL-florRosa.webp";
import florPink from "../Images/GBL-florPink.webp";
import arvoreBola from "../Images/GBL-arvore-bolas.webp";
import moeda from "../Images/GBL-moeda.webp";
import coracao from "../Images/GBL-coracao-vida.webp";
import nuvemCumprida from "../Images/GBL-nuvem-cumprida.webp";
import ralphGif from "../Images/ralph-gif.gif";
import desafioParesGif from "../Images/desafio-dos-pares-gif.gif";
import pianoGif from "../Images/piano-gif.gif";
import yugiGif from "../Images/yugi-gif.gif";

import coelho from "../Images/GBL-coelho.webp";
import GameDescription from "../Components/GameDescription";
import Jogo from "./Jogo";

import arrow from "../Images/GBL-seta.webp";
import arrowLeft from "../Images/GBL-seta-esquerda.webp";

export default function GameDetails({ game, goBack }) {
  const [playGame, setPlayGame] = useState(false);

  const textRalph =
    "Em um mundo de fliperamas, Ralph é o vilão dos jogos de arcade. Em seu próprio jogo, você precisa clicar onde quer que ele apareça para capturá-lo, marcando valiosos pontos. Mas, para vencer, é preciso mais do que apenas rapidez e raciocínio ágil. Ralph, o personagem que ninguém espera ser herói, mostrará que, para ganhar, é necessário quebrar barreiras, superar desafios e provar que até mesmo os vilões podem se tornar vencedores.";

  const textMemory =
    "Bem-vindo ao emocionante mundo dos jogos de arcade de pixels! É uma versão única e divertida do clássico jogo da memória, onde você deve combinar pares de imagens idênticas para ganhar pontos. Teste sua memória e concentração enquanto explora uma variedade de imagens incríveis.";

  const textPiano =
    "Desfrute de uma experiência musical única com o Simulador de Piano! Torne-se um pianista virtuoso, explore um teclado e crie músicas incríveis. Deixe sua criatividade fluir e embarque em uma jornada musical única, onde a diversão é a chave e a melodia é o prêmio.Liberte sua criatividade e torne-se o maestro da música neste simulador cativante.";

  const textYugi =
    "Prepare-se para entrar no mundo de Yo-Gi-Oh Jokenpô, escolha sua carta e desafie o computador em uma batalha. Mostre sua astúcia, escolha suas técnicas e aprenda com cada batalha. Entre nesse universo de jogos e se divirta! Com a ambientação, cartas e trilha sonora fiéis ao universo do Yugi, prepare-se para duelar e se tornar o mestre deste emocionante jogo inspirado em um clássico.";

  let textGame;
  let imageGame;

  switch (game) {
    case "Ralph":
      textGame = textRalph;
      imageGame = ralphGif;
      break;
    case "Desafio dos Pares":
      textGame = textMemory;
      imageGame = desafioParesGif;
      break;
    case "Piano":
      textGame = textPiano;
      imageGame = pianoGif;
      break;
    case "Yu-Gi-Oh!":
      textGame = textYugi;
      imageGame = yugiGif;
      break;
    default:
      return null;
  }

  const handleGameClose = () => {
    setPlayGame(false);
  };

  return playGame === true ? (
    <Jogo game={game} onClose={handleGameClose} />
  ) : (
    <div className={style.gameDetails_background}>
      <img
        src={arrowLeft}
        alt="arrow"
        className={style.gameDetails_arrow}
        onClick={goBack}
      />
      <div className={style.gameDetails_container}>
        <div className={style.gameDetails_el_topo_box}>
          <div className={style.gameDetails_el_moeda}>
            <img
              src={moeda}
              alt="moeda de pixel"
              className={style.gameDetails_moeda}
            />
            <p>1575</p>
          </div>
          <img
            src={coracao}
            alt="vidas de coração de pixel"
            className={style.gameDetails_coracao}
          />
        </div>
        <div className={style.gameDetails_content_box}>
          <div className={style.gameDetails_img_box}>
            <img
              src={imageGame}
              alt="gif do jogo"
              className={style.gameDetails_img_gif}
            />
          </div>
          <div className={style.gameDetails_details_box}>
            <GameDescription description={textGame} titulo={game} />
            <h4
              className={style.gameDetails_play_button}
              onClick={() => setPlayGame(true)}
            >
              Play Game
            </h4>
          </div>
        </div>
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
          src={nuvemCumprida}
          alt="nuvem de pixel"
          className={style.gameDetails_nuvemCumprida}
        />

        <Background page="jogo" />
      </div>
      <img
        src={arrow}
        alt="arrow"
        className={style.gameDetails_arrow}
        style={{ visibility: "hidden" }}
      />
    </div>
  );
}
