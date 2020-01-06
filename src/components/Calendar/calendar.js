import React from 'react';
import Calendar from 'react-calendar/dist/entry.nostyle';
import './styles.scss';

export const CalendarComponent = ({ classes }) => {
    const newdays = [new Date()];

    const isDateInArray = date => {
        const selectedDate = newdays.find(dateItem => {
            return date.toDateString() === dateItem.toDateString();
        })

        return !!selectedDate;
    }

    const setSelectedClassName = ({ activeStartDate, date, view }) => {
        return isDateInArray(date) ? 'selected' : null
    };
  
    return (
        <div>
            <Calendar 
                selectRange={true} 
                tileClassName={setSelectedClassName}
                className="react-calendar-custom " />
        </div>
    )
}
