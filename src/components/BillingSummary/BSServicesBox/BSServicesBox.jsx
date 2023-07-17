import './BSServicesBox.css';

const BSServicesBox = ({ data }) => {
    return (

        <>
            <div className="bs_services_box">
                <div className="bs_service_name">
                    {data ? data.service_name : ""}
                </div>

                <div className="bs_service_employee">
                    {data ? data.service_employee : ""}
                </div>
            </div>


        </>
    )
}


export default BSServicesBox;