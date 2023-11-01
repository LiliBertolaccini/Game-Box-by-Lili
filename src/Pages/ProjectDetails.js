import React from "react";
import style from "./projectDetails.module.scss";
import Background from "../Components/Background";
import caixa from "../Images/GBL-elemento-caixa.webp";
import profileImg from "../Images/GBL-profile_lili.jpeg";
import tituloG from "../Images/GBL-elemento-titulo-grande.webp";

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
          <img src={caixa} alt="background foto" />
        </div>
        <div className={style.projectDetails_text_box}>
          <div className={style.projectDetails_titulo_box}>
            <h2>Desafios e aventuras de HTML, CSS e JS</h2>
            <img src={tituloG} alt="background titulo" />
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
      {/*importar aqui as imgs!*/}
      <Background page="jogo" />
    </section>
  );
}
