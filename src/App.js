import { useEffect, useState } from 'react';
import './App.css';
import style from './app.module.scss';
import Home from './Pages/Home';
import Games from './Pages/Games';
import arrow from './Images/GBL-seta.webp';

function App() {
  const [local, setLocal] = useState('games');
  let componentPage ;
  switch (local) {
    case 'home':
      componentPage = <Home />;
      break;
    case 'games':
      componentPage = <Games />;
      break;
    default:
      componentPage = '';
      break;
  }

  useEffect(() => {

      
  }, [local])

  return (
    <div className={style.app_container}>
      {componentPage}
      <Games />
    </div>
  );
}

export default App;
