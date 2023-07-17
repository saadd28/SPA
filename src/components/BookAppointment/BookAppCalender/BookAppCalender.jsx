import { Calendar } from 'react-calendar';
import './BookAppCalender.css'
import {addDays} from "date-fns";
import { useState } from 'react';

const presentdate =  new Date();
const tomorrowdate = addDays(presentdate, 1);

const BookAppCalender = () =>{

    const [value, setvalue] = useState(new Date())
     
    return(
        <>

            <Calendar
            onChange={setvalue}
            value={value}
            minDate={presentdate} 
            maxDate={tomorrowdate} 
            className={"react_calende"}
            calendarType={"ISO 8601"}
            prev2Label={""}
            prevLabel={""}
            next2Label={""}
            nextLabel={""}
            showWeekNumbers={false}
            />
        </>
    )



}


export default BookAppCalender;