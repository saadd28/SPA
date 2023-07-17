import './BillingSummary.css';
// import second from '../../img/bookappointmentcover.jpg'
import LeafImage from '../../img/receptionleaf.png'
import LeafImage2 from '../../img/billingsummaryleaf.png'
import BSServicesBox from './BSServicesBox/BSServicesBox';


const BillingSummary = () => {
    let data = [
        {
            service_name: "Hair",
            service_employee: "Khalid hussain"
        },
        {
            service_name: "Massage",
            service_employee: "Khalid hussain"
        },
        {
            service_name: "Hair",
            service_employee: "Khalid hussain"
        },
        {
            service_name: "Massage",
            service_employee: "Khalid hussain"
        },
        {
            service_name: "Hair",
            service_employee: "Khalid hussain"
        },
        {
            service_name: "Massage",
            service_employee: "Khalid hussain"
        }

    ]

    return (
        <>
            <div className="billing_summary_cover_image">
                {/* <img src={ScheduleImage} alt="" /> */}
                <p className="reception_heading">
                    Book appointment
                </p>

            </div>

            <div style={{
                width: "100%",
                position: "relative"
            }}>

                <div className="billing_summary_leaf2">
                    <img src={LeafImage} alt="Leaf" />
                </div>

                <div className="billing_summary_main_container">
                    <div className="billing_summary_heading">Billing Summary</div>

                    <div className='billing_summary_content_main_container'>

                        <div className='billing_summary_details_container'>
                            <div className="billing_summary_details1">
                                <div className="billing_summary_details_headings">
                                    <div className="billing_summary_details_headings_style">
                                        Date
                                    </div>

                                    <div className="billing_summary_details_headings_style">
                                        Time
                                    </div>

                                    <div className="billing_summary_details_headings_style">
                                        Branch
                                    </div>
                                </div>

                                <div className="billing_summary_details_content">
                                    <div className="billing_summary_details_content_style">
                                        5th march 2022
                                    </div>

                                    <div className="billing_summary_details_content_style">
                                        11:00am - 11:15am
                                    </div>

                                    <div className="billing_summary_details_content_style">
                                        Name here
                                    </div>
                                </div>

                                <div className="billing_summary_leaf">
                                    <img src={LeafImage2} alt="Leaf" />
                                </div>


                            </div>

                            <div className="billing_summary_details1">

                                <div className="billing_summary_details_headings">
                                    <div className="billing_summary_details_headings_style">
                                        Price
                                    </div>

                                    <div className="billing_summary_details_headings_style">
                                        Discount
                                    </div>

                                    <div className="billing_summary_details_headings_style">
                                        Total
                                    </div>
                                </div>

                                <div className="billing_summary_details_content">
                                    <div className="billing_summary_details_content_style">
                                        $1234
                                    </div>

                                    <div className="billing_summary_details_content_style">
                                        $12
                                    </div>

                                    <div className="billing_summary_details_content_style">
                                        $1246
                                    </div>
                                </div>

                                <div className="billing_summary_leaf">
                                    <img src={LeafImage2} alt="Leaf" />
                                </div>

                            </div>

                        </div>

                        <div className="billing_summary_services_container">
                            {
                                data.map((data) => (
                                    <BSServicesBox data={data} />
                                ))
                            }

                        </div>

                        <div className="billing_summary_coupon_container">
                            <div className="billing_summary_coupon_heading">
                                Enter Coupon
                            </div>

                            <input type="text" name="coupon" id="coupon" className='billing_summary_coupon_input' placeholder='Enter here' />
                        </div>

                        <div className="billing_summary_cancel_container">
                            <div className="billing_summary_cancel_heading">
                                Cancellation Policy
                            </div>

                            <div className="billing_summary_cancel_content">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                 has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                                 took a galley of type and scrambled it to make a type specimen book. It has survived not 
                                 only five centuries, but also the leap into electronic typesetting, remaining essentially 
                                 unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                                 Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
                                 including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and 
                                 typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 
                                 the 1500s, when an unknown printer.
                            </div>
                        </div>


                        <div className="billing_summary_buttons_container">
                            <button className='billing_summary_paynow_btn'>Pay Now</button>
                            <button className='billing_summary_payatstore_btn'>Pay at Store</button>
                        </div>




                    </div>

                </div>


            </div>





        </>
    )
}

export default BillingSummary;