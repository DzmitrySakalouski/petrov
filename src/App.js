import React from 'react';
import './App.css';
import avatar from './assets/avatar.jpg';
import { HomeData } from './components/HomeData/homeData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlassCheers } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App App-header">
      <header className="header">
        <div className="logo-container">
          <div className="logo">
            <FontAwesomeIcon color="#61DAFB" size="lg" icon={faGlassCheers} />
          </div>
        </div>
        <ul className="header-nav">
          <li className="nav-item">Обо мне</li>
          <li className="nav-item">Услуги</li>
          <li className="nav-item">Галерея</li>
          <li className="nav-item">Расписание</li>
        </ul>
      </header>

      <main>
        <div className="home">
          <div className="home-item home-item__data">
            <HomeData />
          </div>
          <div className="home-item home-item__logo">
            <div className="avatar" style={{ backgroundImage: `url("${avatar}")` }} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
