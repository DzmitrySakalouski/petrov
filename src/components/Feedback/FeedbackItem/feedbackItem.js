import React from 'react';
import './feedbackItem.scss';

export const FeedbackItem = props => {
    const { name, image, text, index } = props;
    console.log(index)
    return (
        <div className="feedback-container" style={{ flexDirection: (index + 1) % 2 === 0 ? "row-reverse" : "row" }}>
            <div className="feedback-img" style={{ backgroundImage: `url(${image}`}} alt="Hello" />
            <div className="feedback-details">
                <h3 className="feedback-username">{name}</h3>
                <p className="feedback-text">{text}</p>
                <p className="feedback-text__details">Подробнее...</p>
            </div>
        </div>
    )
}
