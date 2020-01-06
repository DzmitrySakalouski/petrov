import React from 'react';
import './homeData.scss';
import '../../assets/fontawesome-free-5.12.0-web/css/all.css';
import { Button } from '../Button/button';

export const HomeData = () => {
    const btnStyles = {
        backgroundColor: '#61DAFB',
        color: '#282c34',
        padding: '10px 35px',
        borderRadius: '30px',
        margin: '25px 0',
        display: 'flex',
        justifyContent: 'center'
    }

    return (
        <div className="home-data">
            <span className="text-small">Привет, я</span>
            <span className="text-big">Александр Петров</span>
            <span className="text-medium">SHOWMAN</span>
            <Button title="Связаться со мной    " styles={btnStyles} handleClick={() => console.log()}/>
            <ul className="social-icons">
                <li className="social-btn">
                    <i className="fab fa-vk icon"></i>
                </li>
                <li className="social-btn">
                    <i className="fab fa-instagram icon"></i>
                </li>
                <li className="social-btn">
                    <i className="fab fa-odnoklassniki icon"></i>
                </li>
                <li className="social-btn">
                    <i className="fab fa-youtube icon"></i>
                </li>
            </ul>
        </div>
    )
}
