import React from 'react';
import { FeedbackForm } from '../Form/feedbackForm';
import { FeedbackList } from '../List/feedbackList';
import  './feedbackDerictory.scss';

export const FeedbackDerictory = () => {
    const [isFormVisible, setFormVisible] = React.useState(false);

    const toggleForm = () => {
        setFormVisible(!isFormVisible);
    }

    return (
        <div className="feedback-derictory">
            {
                isFormVisible ? <FeedbackForm /> : <FeedbackList />
            }
            <button className="feedbackBtn" onClick={toggleForm}>{isFormVisible ? "Вернуться к списку отзывов" : "Написать отзыв"}</button>
        </div>
    )
}
