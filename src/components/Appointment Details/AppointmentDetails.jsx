import './AppointmentDetails.css'
import LeafImage from '../../img/leaf.png'
import AppLeafImage2 from '../../img/app_det_leaf_2.png'
import AppLeafImage1 from '../../img/app_det_leaf.png'
// import UserIcon from '../../img/usericon.png'
import { useLocation, useNavigate } from 'react-router-dom'
import AppDetServiceBox from './AppDetServiceBox/AppDetServiceBox'
import moment from 'moment/moment'

import UserImage from '../../img/app_det_user_img.png'

const AppointmentDetails = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state ? location.state.datatosend : "";

    
    // const location = useLocation();
    // console.log("location", location)
    // const data = location.state?location.state.datatosend:"";

    // let data =
    // {
    //     date: "5 Sept 22",
    //     time: "10:00pm - 12:00am",
    //     customer_name: "Shuzan John",
    //     payment_status: "Unpaid",
    //     service_name: "Massage",
    //     service_employee: "Khalid",
    //     service_employee_ln: "Hussain",
    //     amount: 1234,
    //     booking_type: "Online",
    //     payment_mode: "Card",
    //     customer_phone: "0300-1234567"

    // };

    // const data = [
    //     {
    //         id: 1,
    //         service_name: "Massage",
    //         service_employee: "Khalid",
    //         service_employee_ln: "Hussain",
    //     },
    //     {
    //         id: 2,
    //         service_name: "Massage",
    //         service_employee: "Khalid",
    //         service_employee_ln: "Hussain"

    //     },
    //     {
    //         id: 3,
    //         service_name: "Massage",
    //         service_employee: "Khalid",
    //         service_employee_ln: "Hussain"

    //     }
    // ]

    const status = "Unpaid";

    console.log("data", data)


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

            <div className="appointment_details_main_container">
                <div className='appointment_details_heading'>Appointment Details</div>

                <div className="app_det_container">
                    <div className="app_det_leftside">
                        <div className="app_det_detbox">
                            <div className="app_dets_headings">
                                <div className="app_dets_headings_style">Date</div>
                                <div className="app_dets_headings_style">Time</div>
                                <div className="app_dets_headings_style">Amount</div>
                                <div className="app_dets_headings_style">Booking Type</div>
                                <div className="app_dets_headings_style">Payment Status</div>
                                <div className="app_dets_headings_style">Payment Mode</div>

                            </div>

                            <div className="app_dets_content">
                                <div className='app_dets_content_style'>{moment(data.booking_details[0].start_datetime.split(".")[0]).format("D MMM YY")}</div>
                                <div className='app_dets_content_style'>{moment(data.booking_details[0].start_datetime.split(".")[0]).format('LT') + ' - ' + moment(data.booking_details[0].end_datetime.split(".")[0]).format('LT')}</div>
                                <div className='app_dets_content_style'>${data.net_price}</div>
                                <div className='app_dets_content_style'>{data.booking_type_id === 6 ? "Online" : "Onsite"}</div>
                                <div className='app_dets_content_style'>{data.payment_status_id === 13 ? "Paid" : "Unpaid"}</div>
                                <div className='app_dets_content_style'>{data.booking_type_id === 6 ? "Card" : "---"}</div>

                            </div>


                            <img src={AppLeafImage2} alt="Leaf" className='app_det_leaf2' />
                        </div>


                        <div className="app_dets_buttons">
                            <button className='app_det_mod_btn' onClick={event => {
                                navigate('/modifybooking', {state:{
                                    datatosend:data
                                }})
                            }}>Modify</button>
                            <button className='app_det_invoice_btn' onClick={event => {
                                navigate('/invoice', { state: {
                                    datatosend: data
                                } })
                            }}>
                                {status === "Paid" ? "Invoice" : "Collect Payment"}
                            </button>
                        </div>
                    </div>

                    <div className="app_det_rightside">
                        <div className="customer_det_box">

                            <img src={AppLeafImage1} alt="Leaf" className='app_det_leaf_1' />

                            <div className="customer_det_subbox1">
                                <img src={data.customer_image?"https://api-spa.dsmeglobal.com/"+ data.customer_image:UserImage} alt="user img" />
                                {/* <div className="image_container">
                                    <img src={UserIcon} alt="usericon" />
                                </div> */}

                                <div className="customer_name_style">
                                    {data.customer_name}
                                </div>

                            </div>

                            <div className='customer_det_subbox2'>
                                <div className="customer_number_label_style">
                                    Number
                                </div>



                                <div className="customer_number_style">
                                    {data.customer_phone}
                                </div>

                            </div>
                        </div>

                        <div className="app_det_services">

                            {

                                data.booking_details.map((item) => (
                                    <AppDetServiceBox data={item} />
                                ))

                            }

                        </div>
                    </div>
                </div>
            </div>


        </>
    )

}

export default AppointmentDetails;