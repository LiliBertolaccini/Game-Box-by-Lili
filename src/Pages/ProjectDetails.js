import React from "react";
import style from "./projectDetails.module.scss";
import Background from "../Components/Background";
import caixa from "../Images/GBL-elemento-caixa.webp";
import profileImg from "../Images/GBL-profile_lili.jpeg";
import tituloG from "../Images/GBL-elemento-titulo-grande.webp";
import avatar from "../Images/GBL-avatar.webp";
import terra from "../Images/GBL-terra.webp";
import florRosa from "../Images/GBL-florRosa.webp";
import montanha from '../Images/GBL-montanha.webp';




export default function ProjectDetails() {
  return (
    <section className={style.projectDetails_container}>
      <div className={style.projectDetails_box}>
        <div className={style.projectDetails_img_box}>
          <img
            src={profileImg}
            alt="foto da desenvolvedora-lili"
            className={style.projectDetails_img_lili}
          />
          <img
            src={caixa}
            alt="background foto"
            className={style.projectDetails_img_background}
          />

          
        </div>
        <div className={style.projectDetails_text_box}>
          <div className={style.projectDetails_titulo_box}>
            <h2>Desafios e aventuras de HTML, CSS e JS</h2>
            <img
              src={tituloG}
              alt="background titulo"
              className={style.projectDetails_titulo_background}
            />
          </div>
          <p>
            "Em um dia não tão distante, me deparei com a aventura proposta pela{" "}
            <a href="https://www.dio.me" target="_blank" rel="noreferrer">
              Dio.me
            </a>
            , de construir 4 jogos em HTML, CSS e JS. Na jornada da{" "}
            <a
              href="https://web.dio.me/track/b19b1586-8a94-4eb7-95af-15d785b6e96e"
              target="_blank"
              rel="noreferrer"
            >
              Potência Tech iFood - Desenvolvimento de Jogos
            </a>{" "}
            , encontrei muitos desafios, mas no fim, encontrei o baú do tesouro.
            Para guardar essas relíquias, construí esse esconderijo, somente os
            de coração puro conseguiram encontrá-lo. (Parabéns a você que chegou
            até aqui)"
          </p>
        </div>

      </div>

      <img
      src={avatar}
      alt="avatar de pixel"
      className={style.projectDetails_avatar}
        />

      <img
      src={terra}
      alt="chão de pixel"
      className={style.projectDetails_terra}
        />

      <img
      src={florRosa}
      alt="flor rosa de pixel"
      className={style.projectDetails_florRosa}
        />

      <img
      src={montanha}
      alt="flor rosa de pixel"
      className={style.projectDetails_montanha}
        />

      {/*importar aqui as imgs!*/}
      <Background page="jogo" />
    </section>
  );
}
