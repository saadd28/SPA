import "./ModifyBooking.css";
import LeafImage from '../../img/leaf.png'
import ModifyBookingCard from "./ModifyBookingCard/ModifyBookingCard";
import { useLocation, useNavigate } from "react-router-dom";


const ModifyBooking = () => {
    

    const location = useLocation();
    const data = location.state? location.state.datatosend:"";
    console.log("data", data)

    const navigate = useNavigate();

    return (
        <>
            <div className="cover_image">
                {/* <img src={ScheduleImage} alt="" /> */}
                <p className="reception_heading">
                    Schedule
                </p>

            </div>

            <div>
                <img src={LeafImage} alt="" className="leaf leaf_pos" />
            </div>


            <div className="modify_booking_container">
                <div className="modify_booking_heading">
                    Modify Booking
                </div>

                <div className="modify_cards_container">
                    {data.booking_details.map((data, index) => (
                        <ModifyBookingCard data={data} index={index} />
                    ))}

                </div>

                <div className="modify_booking_save">
                    <button className="modify_booking_save_btn" onClick={event => {
                        navigate('/receptionist_dashboard')
                    }}>Save</button>
                </div>
            </div>




        </>
    )
}

export default ModifyBooking;