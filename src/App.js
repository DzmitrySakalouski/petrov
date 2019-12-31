import React from 'react';
import './App.css';
import avatar from './assets/avatar.jpg';
import aboutImage from './assets/about.jpg';
import { HomeData } from './components/HomeData/homeData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlassCheers } from '@fortawesome/free-solid-svg-icons';
import './assets/fontawesome-free-5.12.0-web/css/all.css';
import { Slide } from 'react-slideshow-image';
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'
import img5 from './assets/img5.jpg'
import img6 from './assets/img6.jpg'
import img7 from './assets/img7.jpg'
import img8 from './assets/img8.jpg'
import img9 from './assets/img9.jpg'
import img10 from './assets/img10.jpg'

import { CalendarComponent } from './components/Calendar/calendar';

const slideImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

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

        <div className="row">
          <div className="gallery-title margin-bottom-normal">
            <span className="type-large margin-bottom-normal">Галерея</span>
          </div>
          <div className="slide-container">
            <Slide {...properties}>
              {
                slideImages.map((image, index) => {
                  return (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <div style={{ 'backgroundImage': `url(${image})`, height: 600, width: '70%', backgroundRepeat: "no-repeat", backgroundSize: 'contain', backgroundPosition: 'center' }}>
                      </div>
                    </div>
                  )
                })
              }
            </Slide>
          </div>
        </div>

        <div className="row">
          <div className="margin-bottom-normal">
            <span className="type-large margin-bottom-normal">Расписание</span>
            <CalendarComponent />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
