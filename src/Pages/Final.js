import React from "react";
import style from "./final.module.scss";

import Background from "../Components/Background";

import arrow from '../Images/GBL-seta.webp';
import avatar from "../Images/GBL-avatar.webp";
import terra from "../Images/GBL-terra.webp";
import nuvemTriangulo from "../Images/GBL-nuvem-triangulo.webp";
import nuvemCumprida from "../Images/GBL-nuvem-cumprida.webp";
import florRosa from "../Images/GBL-florRosa.webp";
import arvoreCheia from "../Images/GBL-arvore-cheia.webp";
import cogumelo from "../Images/GBL-cogumelo.webp";
import coelho from "../Images/GBL-coelho.webp";






export default function Final() {
  return (
    <div className={style.final_container}>
      <Background page="final" />
    </div>
  );
}
