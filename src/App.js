import React from 'react';
import './App.css';
import avatar from './assets/avatar.jpg';
import aboutImage from './assets/about.jpg';
import { HomeData } from './components/HomeData/homeData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlassCheers } from '@fortawesome/free-solid-svg-icons';
import './assets/fontawesome-free-5.12.0-web/css/all.css';

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

        <div className="home home_margin">
            <div className="home-item home-item__data">
              <div className="avatar avatar-animation" style={{ backgroundImage: `url("${aboutImage}")` }} />
            </div>
            <div className="home-item home-item__logo">
              <span className="type-small type_align-left">Так кто же я?</span>
              <span className="type-large">Александр Петров</span>
              <span className="type-medium">Ведущий</span>
              <span className="type_align-right ">
                Всем привет, тут будет текст, который описывает мою деятельность.
                Всем привет, тут будет текст, который описывает мою деятельность.
                Всем привет, тут будет текст, который описывает мою деятельность.
                Всем привет, тут будет текст, который описывает мою деятельность.
                Всем привет, тут будет текст, который описывает мою деятельность.
                Всем привет, тут будет текст, который описывает мою деятельность.
                Всем привет, тут будет текст, который описывает мою деятельность.
                Всем привет, тут будет текст, который описывает мою деятельность.
              </span>
            </div>
          </div>

          <div className="offers">
            <div className="offers-title-container">
              <span className="type-small type_align-left">Услуги</span>
              <span className="type-large">Чем я занимаюсь</span>
            </div>
            <ul className="offers-list">
              <li className="offers-item">
                <div className="item">
                  <i class="fas fa-glass-martini icon-offers" ></i>
                  <p className="offer-description">Корпоративы</p>
                </div>
              </li>
              <li className="offers-item">
                <div className="item">
                  <i class="fas fa-ring icon-offers"></i>
                  <p className="offer-description">Свадьбы</p>
                </div>
              </li>
              <li className="offers-item">
                <div className="item">
                  <i class="fas fa-birthday-cake icon-offers"></i>
                  <p className="offer-description">Дни Рождения</p>
                </div>
              </li>
              <li className="offers-item">
                <div className="item">
                  <i class="fas fa-child icon-offers"></i>
                  <p className="offer-description">Детские утренники</p>
                </div>
              </li>
            </ul>
            <div className="statistics">
              <div className="statistics-container">
                <ul className="statistics-items">
                  <li className="statistics-item">
                    <p className="count">115</p>
                    <p>Мероприятий</p>
                  </li>
                  <li className="statistics-item">
                    <p className="count">2836</p>
                    <p>Гостей</p>
                  </li>
                  <li className="statistics-item">
                    <p className="count">&#8734;</p>
                    <p>Позитива</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="gallery">
            
          </div>
      </main>
    </div>
  );
}

export default App;
