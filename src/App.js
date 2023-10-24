import './App.css';
import style from './app.module.scss';
import Home from './Pages/Home';

function App() {
  return (
    <div className={style.app_container}>
      <Home />
    </div>
  );
}

export default App;
