import { useState } from 'react';
import './App.css';
import style from './app.module.scss';
import Home from './Pages/Home';
import Games from './Pages/Games';
import arrow from './Images/GBL-seta.webp';
import GameDetails from './Pages/GameDetails';
import ProjectDetails from './Pages/ProjectDetails';
import Final from './Pages/Final';
//import Jogo from './Pages/Jogo';

function App() {
  const [local, setLocal] = useState('games');
  const componentPage = () => {
    switch (local) {
      case 'home':
      return <Home />;
    case 'games':
      return <Games />;
    case 'gameDetails':
      return <GameDetails />;
    case 'projectDetails':
      return <ProjectDetails />;
    //case 'jogo':
      //return <Jogo />;
      case 'final':
      return <Final />;
    default:
      return null;
  }
  };

  const handleClick = (() => {
    switch (local) {
      case 'home':
        return setLocal('games');
      case 'games':
        return setLocal('gameDetails');
      case 'gameDetails':
        return setLocal('projectDetails');
      case 'projectDetails':
        return setLocal('final');
      case 'final':
        return setLocal('home');
    default:
      return null;
    }
  });

  return (
    <div className={style.app_container}>
      <img src={arrow} alt='arrow' className={`${style.app_arrow} ${style.app_arrow_left}`} onClick={handleClick}/>

      { componentPage() }
      <img src={arrow} alt='arrow' className={style.app_arrow} onClick={handleClick}/>
    </div>
  );
}

export default App;
