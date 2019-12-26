import React from 'react';
import './homeData.scss';
import '../../assets/fontawesome-free-5.12.0-web/css/all.css';
import { Button } from '../Button/button';

export const HomeData = () => {
    const btnStyles = {
        backgroundColor: '#61DAFB',
        color: '#282c34',
        height: '35px',
        padding: '10px 35px',
        borderRadius: '30px',
        margin: '25px 0'
    }

    return (
        <div className="home-data">
            <span className="text-small">Привет, я</span>
            <span className="text-big">Александр Петров</span>
            <span className="text-medium">SHOWMAN</span>
            <Button title="Связаться со мной    " styles={btnStyles} handleClick={() => console.log()}/>
            <ul className="social-icons">
                <li className="social-btn">
                    <i class="fab fa-vk"></i>
                </li>
                <li className="social-btn">
                    <i class="fab fa-instagram"></i>
                </li>
                <li className="social-btn">
                    <i class="fab fa-odnoklassniki"></i>
                </li>
                <li className="social-btn">
                    <i class="fab fa-youtube"></i>
                </li>
            </ul>
        </div>
    )
}
