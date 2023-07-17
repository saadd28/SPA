// import { useState } from 'react';
import "./ModifyBookingCard.css";
import moment from 'moment/moment'
import Select from 'react-select';


const ModifyBookingCard = ({ data, index }) => {
  // let [servicename, setservicename] = useState(data.service_name);
    console.log("data", data)
    // debugger
  return (
    <>
      <div className="modify_booking_card">
        <div className="modify_booking_service_number">Service {index + 1}</div>

        <div className="modify_booking_card_content">
            <Select className="service_name_dropdown" />
          {/* <select
            name="service_name"
            id="service_name"
            className="service_name_dropdown"
          >
            <option value="selected">{data.service_name}</option>
            <option value="jetbath">Jet Bath</option>
            <option value="massage">Massage</option>
          </select>

          <select
            name="service_employee"
            id="service_employee"
            className="service_name_dropdown"
          >
            <option value="selected">{data.employee_name}</option>
            <option value="employee1">Hanzalah</option>
            <option value="employee2">Waleed</option>
          </select>

          <select
            name="service_time"
            id="service_time"
            className="service_name_dropdown"
          >
            <option value="selected">{moment(data.start_datetime.split(".")[0]).format('LT') + ' - ' + moment(data.end_datetime.split(".")[0]).format('LT')}</option>
            <option value="timeslot1">2:00pm-3:00pm</option>
            <option value="timeslot2">3:00pm-4:00pm</option>
          </select> */}
        </div>
      </div>
    </>
  );
};

export default ModifyBookingCard;
