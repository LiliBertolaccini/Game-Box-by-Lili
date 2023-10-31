import React from "react";
import style from "./projectDetails.module.scss";
import Background from "../Components/Background";


export default function ProjectDetails() {
  return (
    <div className={style.projectDetails_container}>
      <Background page="jogo" />
    </div>
  );
}