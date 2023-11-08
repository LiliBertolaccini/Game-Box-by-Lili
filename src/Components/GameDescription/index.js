import React from "react";
import style from "./gameDescription.module.scss";

import tituloG from "../../Images/GBL-elemento-titulo-grande.webp";

export default function GameDescription({description, titulo}) {

  return (
    <div className={style.gameDescription_container}>
      <div className={style.gameDescription_titulo_box}>
        <h3>{titulo}</h3>
        <img
          src={tituloG}
          alt="background do titulo do jogo"
          className={style.gameDescription_titulo_background}
        />
      </div>
      <div className={style.gameDescription_caixa}>
      <p>{description}</p>
      </div>
    </div>
  );
}
