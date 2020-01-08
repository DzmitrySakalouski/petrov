import React from 'react';
import Calendar from 'react-calendar/dist/entry.nostyle';
import './styles.scss';

export const CalendarComponent = ({ classes }) => {
    const newdays = [new Date(2020, 0, 7), new Date(2020, 0, 5), new Date()];

    const isDateInArray = date => {
        const selectedDate = newdays.find(dateItem => {
            // console.log(date.toDateString() === dateItem.toDateString())
            return date.toDateString() === dateItem.toDateString();
        })
        // !!selectedDate && console.log("selectedDate =>", selectedDate, !!selectedDate);
        return !!selectedDate;
    }

    const setSelectedClassName = ({ activeStartDate, date, view }) => {
        console.log("setSelectedClassName", date);
        console.log();
        console.log("isDateInArray", isDateInArray(date))
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
