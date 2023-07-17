import { useState } from 'react';
// import { useLocation } from 'react-router-dom';
import './BookAppointment.css'
import LeafImage1 from '../../img/book_app_leaf_1.png'
import LeafImage2 from '../../img/book_app_leaf_2.png'
import LeafImage3 from '../../img/receptionleaf.png'

import Step1Seleced from '../../img/book_app_step1_selected.png'
import Step2Seleced from '../../img/book_app_step2_selected.png'
import Step3Seleced from '../../img/book_app_step3_selected.png'

import Step1UnSeleced from '../../img/book_app_step1_unselected.png'
import Step2UnSeleced from '../../img/book_app_step2_unselected.png'
import Step3UnSeleced from '../../img/book_app_step3_unselected.png'

import SearchIcon from '../../img/book_app_customer_search_icon.png'
import BookAppServiceLine from '../../img/book_app_service_line.png'
import SearchIconWhite from '../../img/book_app_customer_search_icon_white.png'
import CloseIcon from '../../img/book_app_customer_search_close.png'

import BookAppBookingsRow from './BookAppBookingsRow/BookAppBookingsRow';
import { useNavigate } from 'react-router-dom';
import BookAppCalender from './BookAppCalender/BookAppCalender';
import BookAppCustomerSearchResults from './BookAppCustomerSearchResults/BookAppCustomerSearchResults';
// import { useScrollTo } from 'react-use-window-scroll';
// import TableRow from '../Receptionist Dashboard/TableRow/TableRow';

const BookAppointment = () => {
    // const location = useLocation()

    const [iswalkin, setiswalkin] = useState(true)
    const [step, setstep] = useState('1')
    const [issearch, setissearch] = useState(false)
    let data = [
        {
            service_name: "Jet Bath",
            service_date: "5 sept 22",
            service_time: "10:00pm - 12:00am",
            service_employee: "Shuzan John",
            service_charges: 3400,
            customer_name: "Asim rasheed",
            customer_phone: "0300-1234567"
        },
        {
            service_name: "Jet Bath",
            service_date: "5 sept 22",
            service_time: "10:00pm - 12:00am",
            service_employee: "Shuzan John",
            service_charges: 3400,
            customer_name: "Asim rasheed",
            customer_phone: "0300-1234567"
        },
        {
            service_name: "Jet Bath",
            service_date: "5 sept 22",
            service_time: "10:00pm - 12:00am",
            service_employee: "Shuzan John",
            service_charges: 3400,
            customer_name: "Asim rasheed",
            customer_phone: "0300-1234567"
        },
        {
            service_name: "Jet Bath",
            service_date: "5 sept 22",
            service_time: "10:00pm - 12:00am",
            service_employee: "Shuzan John",
            service_charges: 3400,
            customer_name: "Asim rasheed",
            customer_phone: "0300-1234567"
        },
        {
            service_name: "Jet Bath",
            service_date: "5 sept 22",
            service_time: "10:00pm - 12:00am",
            service_employee: "Shuzan John",
            service_charges: 3400,
            customer_name: "Asim rasheed",
            customer_phone: "0300-1234567"
        },
        {
            service_name: "Jet Bath",
            service_date: "5 sept 22",
            service_time: "10:00pm - 12:00am",
            service_employee: "Shuzan John",
            service_charges: 3400,
            customer_name: "Asim rasheed",
            customer_phone: "0300-1234567"
        },
        {
            service_name: "Jet Bath",
            service_date: "5 sept 22",
            service_time: "10:00pm - 12:00am",
            service_employee: "Shuzan John",
            service_charges: 3400,
            customer_name: "Asim rasheed",
            customer_phone: "0300-1234567"
        },
        {
            service_name: "Jet Bath",
            service_date: "5 sept 22",
            service_time: "10:00pm - 12:00am",
            service_employee: "Shuzan John",
            service_charges: 3400,
            customer_name: "Asim rasheed",
            customer_phone: "0300-1234567"
        }
    ]

    const navigate = useNavigate();
    // const scrollTo = useScrollTo();


    return (

        <>
            <div className="billing_summary_cover_image">
                {/* <img src={ScheduleImage} alt="" /> */}
                <p className="reception_heading">
                    Book appointment
                </p>

            </div>

            <img src={LeafImage1} alt="leaf" className='book_app_leaf_1' />

            <img src={LeafImage3} alt="leaf" className='book_app_leaf_3' />

            <div className="book_app_main_container">
                <div className="book_app_customer_container" id='book_app_customer_container'>
                    <div className="book_app_customer_container_header">
                        <div className="book_app_customer_container_heading">
                            Fill Customer Data
                        </div>

                        {iswalkin ? "" :
                            <img src={SearchIcon} alt="search icon" onClick={event => {
                                setissearch(true);
                            }} />
                        }


                    </div>

                    <div className="book_app_customer_buttons">
                        <button className={iswalkin ? 'book_app_customer_walkin_btn book_app_btn_selected' : "book_app_customer_walkin_btn book_app_btn_unselected"}
                            onClick={event => {
                                if (!iswalkin) {
                                    setiswalkin(true)
                                }
                            }}
                        >Walk-in Customer</button>
                        <button className={iswalkin ? 'book_app_customer_existing_btn book_app_btn_unselected' : 'book_app_customer_existing_btn book_app_btn_selected'}
                            onClick={event => {
                                if (iswalkin) {
                                    setiswalkin(false)
                                }
                            }}
                        >Existing Customer</button>
                    </div>


                    <input type="text" placeholder=
                    {iswalkin?"Number":"Name"} className='book_app_customer_input' />


                    {issearch ?
                        <div className="book_app_customer_search_container" id='book_app_customer_search_container'>
                            
                            <img src={CloseIcon} alt="close" className='book_app_customer_search_close' onClick={event =>{
                                setissearch(false)
                            }}/>
                            
                            <div className="book_app_customer_search_input_container">
                                <input type="text" placeholder='Search here.....' className='book_app_customer_search_input' />
                                <img src={SearchIconWhite} alt="search icon" />
                            </div>


                            {
                                data.map((data) => (

                                    <BookAppCustomerSearchResults data={data} setissearch={setissearch} />
                                ))
                            }



                        </div>
                        : ""
                    }


                </div>


                <div className="book_app_service_container">
                    <div className="book_app_service_heading">
                        Select service and time
                    </div>

                    {step === '1' ?
                        <div className="book_app_service_steps_container">


                            <img src={Step1Seleced} alt="step1" />
                            <img src={Step2UnSeleced} alt="step2" />
                            <img src={Step3UnSeleced} alt="step3" />
                            <hr className='book_app_service_steps_line' />



                        </div>
                        : ""
                    }

                    {step === '2' ?
                        <div className="book_app_service_steps_container">


                            <img src={Step1UnSeleced} alt="step1" />
                            <img src={Step2Seleced} alt="step2" />
                            <img src={Step3UnSeleced} alt="step3" />
                            <hr className='book_app_service_steps_line' />



                        </div>
                        : ""
                    }


                    {step === '3' ?
                        <div className="book_app_service_steps_container">


                            <img src={Step1UnSeleced} alt="step1" />
                            <img src={Step2UnSeleced} alt="step2" />
                            <img src={Step3Seleced} alt="step3" />
                            <hr className='book_app_service_steps_line' />



                        </div>
                        : ""
                    }

                    {step === '1' ?
                        <div className="book_app_services_step_content">
                            <select name="service_name" className='book_app_services_dropdown'>
                                <option value="masssage" className='book_app_services_dropdown_options'>Massage</option>
                                <option value="jetbath" className='book_app_services_dropdown_options'>Jet Bath</option>
                            </select>
                        </div>

                        : ""
                    }


                    {step === '2' ?
                        <div className="book_app_services_step_content_2">
                            <div className="calender_container">
                                <BookAppCalender />
                            </div>

                            <img src={BookAppServiceLine} alt="Line" className='book_app_service_line_style' />

                            <div className='book_app_service_time_inputs'>
                                <input type="time" className='book_app_service_time_inputs_start_style' />
                                <input type="time" className='book_app_service_time_inputs_end_style' />
                            </div>
                        </div>

                        : ""
                    }

                    {step === '3' ?
                        <div className="book_app_services_step_content">
                            <select name="service_employee" className='book_app_services_dropdown'>
                                <option value="employee1">Khalid hussain</option>
                                <option value="employee2">Khalid hussain</option>
                            </select>
                        </div>

                        : ""
                    }


                    {step === '3' ?

                        <div className="book_app_service_buttons">
                            <button className='book_app_services_next_btn' onClick={event => {
                                setstep('1')
                                navigate('/book_appointment')
                            }}>Complete</button>
                            <button className='book_app_services_addmore_btn' onClick={event => {
                                setstep('1')
                                navigate('/book_appointment')
                            }}>Add More</button>
                        </div>

                        :

                        <div className="book_app_service_buttons">
                            <button className='book_app_services_next_btn' onClick={event => {

                                if (step === '1') setstep('2')
                                else if (step === '2') setstep('3')
                            }}>Next</button>
                        </div>

                    }





                    <img src={LeafImage2} alt="leaf" className='book_app_service_leaf' />

                </div>


                <div className="book_app_booking_container">
                    <table className='book_app_booking_table'>
                        <tr className='book_app_booking_table_header'>
                            <th className='book_app_booking_table_header_content'>Service</th>
                            <th className='book_app_booking_table_header_content'>Date</th>
                            <th className='book_app_booking_table_header_content'>Time</th>
                            <th className='book_app_booking_table_header_content'>Employee</th>
                            <th className='book_app_booking_table_header_content'>Charges</th>
                        </tr>

                        <tbody>
                            {
                                // data.map(row => <TableRow row/>)
                                data.map((data) => (
                                    <BookAppBookingsRow data={data} />
                                ))

                            }
                        </tbody>
                    </table>
                </div>

                <button className="book_app_checkout_btn" onClick={event => {
                    window.scrollTo(0,0);
                    // window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                    navigate('/billingsummary')
                }}>
                    Checkout
                </button>



            </div>



        </>
    )
}

export default BookAppointment;