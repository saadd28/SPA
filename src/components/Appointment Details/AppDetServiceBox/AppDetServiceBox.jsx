import './AppDetServiceBox.css'

const AppDetServiceBox = ({ data }) => {
    
    return (

        <>
            <div className="service_info_box">
                <div className="service_title">
                    {data.service_name}
                </div>

                <div className="servicer_name">
                    {data.employee_name}
                </div>
            </div>

        </>
    )
}

export default AppDetServiceBox;