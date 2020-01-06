import React from 'react';
import { FeedbackForm } from '../Form/feedbackForm';
import { FeedbackList } from '../List/feedbackList';
import './feedbackDerictory.scss';
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

            <Button title={isFormVisible ? "Вернуться к списку отзывов" : "Написать отзыв"} styles={btnStyles} handleClick={toggleForm} />
            <Button title="Показать все" styles={btnStyles} handleClick={toggleForm} />
        </div>
    )
}
