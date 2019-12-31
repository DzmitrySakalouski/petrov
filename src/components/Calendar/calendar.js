import React from 'react';
import Calendar from 'react-calendar/dist/entry.nostyle';
import './styles.scss';

export const CalendarComponent = ({ classes }) => {
    const [date, setDate] = React.useState(new Date());
    const [dates, setDates] = React.useState([])
    const onChange = date => setDate(date);

//     const onClickDay = date => {
//     // if day is already clicked, remove it from state
//     if (dateAlreadyClicked(dates, date)) setDates(datesExcept(dates, date))
//     else setDates([...dates, date])
//   }

//   const tileClassName = ({ date }) => {
//     const classNames = [classes.dayTile]
//     // give active days a special class
//     if (dateAlreadyClicked(dates, date)) return [classes.activeDay, ...classNames]
//     return classNames
  
    return (
        <div>
            <Calendar activeStartDate={new Date()} value={[new Date(2019, 11, 1), new Date(2019, 11, 2)]} className="react-calendar-custom " onChange={onChange} />
        </div>
    )
}
