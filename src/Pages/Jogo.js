import style from "./jogo.module.scss";

import terra from "../Images/GBL-terra.webp";
//import cogumelo from "../Images/GBL-Cogumelo.webp";
import avatar from "../Images/GBL-avatar.webp";
import nuvemTriangulo from "../Images/GBL-nuvem-triangulo.webp";
import dog from "../Images/GBL-dog.webp";
import arvoreBola from "../Images/GBL-arvore-bolas.webp";
import Background from "../Components/Background";
import moeda from "../Images/GBL-moeda.webp";
import coracao from "../Images/GBL-coracao-vida.webp";

export default function Jogo({ game, onClose }) {

  let gameIframe;

  switch (game) {
    case "Ralph":
      gameIframe = "Ralph/index.html";
      break;
    case "Desafio dos Pares":
      gameIframe = "Desafio-dos-Pares/index.html";
      break;
    case "Piano":
      gameIframe = "Piano/index.html";
      break;
    case "Yu-Gi-Oh!":
      gameIframe = "Yu-Gi-Oh/index.html";
      break;
    default:
      return null;
  }



  return (
    <div className={style.jogo_background}>
      <div id={"jogo"} className={style.jogo_container}>
        <div className={style.jogo_el_topo_box}>
          <div className={style.jogo_el_moeda}>
            <img
              src={moeda}
              alt="moeda de pixel"
              className={style.jogo_moeda}
            />
            <p>1355</p>
          </div>
          <img
            src={coracao}
            alt="vidas de coração de pixel"
            className={style.jogo_coracao}
          />
        </div>
        <div className={style.jogo_game_box}>
          <iframe
            className={style.jogo_game_iframe}
            src={`/Jogo/${gameIframe}`}
            title={game}
          ></iframe>
        </div>
        <div className={style.jogo_close_button} onClick={onClose}>
          Fechar
        </div>
        <img src={terra} alt="chão de pixel" className={style.jogo_terra} />
        <img src={avatar} alt="avatar de pixel" className={style.jogo_avatar} />
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
        <Background page="jogo" />
      </div>
    </div>
  );
}
