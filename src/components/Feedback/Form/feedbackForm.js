import React from 'react';
import './feedbackForm.scss';
import feedbackFormImage from '../../../assets/img4.jpg'
import { Button } from '../../Button/button';

const btnStyles = {
    backgroundColor: '#61DAFB',
    color: '#282c34',
    padding: '10px 35px',
    borderRadius: '30px',
    margin: '25px 0',
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer'
}

export const FeedbackForm = () => {
    return (
        <div className="feedback-form__container">
            <div className="feedback-form">
                <div className="feedback-form__item">
                    <label className="feedback-form__label">Введите имя и фамилию</label>
                    <input className="feedback-form__input" type="text" />
                </div>
                <div className="feedback-form__item">
                    <label className="feedback-form__label">Скопируйте ссылку на фото</label>
                    <input className="feedback-form__input" type="text" />
                </div>
                <div className="feedback-form__item">
                    <label className="feedback-form__label">Введите текст</label>
                    <textarea className="feedback-form__textarea" style={{ height: '100px' }}/>
                </div>

                <Button title="Отправить отзыв" styles={btnStyles} handleClick={() => console.log()}/>
            </div>
            <div className="feedback-form__image-container">
                <div className="feedback-form__image" style={{ backgroundImage: `url(${feedbackFormImage})`}} />
            </div>
        </div>

    )
}
