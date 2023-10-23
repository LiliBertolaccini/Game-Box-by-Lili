import React from 'react';
import style from './background.module.scss';
import backgroundHome from '../../Images/GBL-background-home.webp';
import backgroundJogo from '../../Images/GBL-background-jogo.webp';
import backgroundFinal from '../../Images/GBL-background-final.webp';

function Background({page}) {
  let imgBackground = '';

  switch (page) {
    case 'home':
      imgBackground = backgroundHome;
    break;
    case 'jogo':
      imgBackground = backgroundJogo;
    break;
    case 'final':
      imgBackground = backgroundFinal;
    break;
    default:
      imgBackground = '';
    break;
  }

  return (
    <div className={style.background_container}>
      <img src={imgBackground} alt="Background" />
    </div>
  );
}

export default Background;