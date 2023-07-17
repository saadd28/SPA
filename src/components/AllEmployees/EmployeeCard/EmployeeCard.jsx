// import { useState } from 'react';
import './EmployeeCard.css'

const EmployeeCard = ({data}) =>{

    // const [isfree, setisfree] = useState()

    return(
        <>
            <div className={data.emp_available?"emp_card_free":"emp_card_busy"}>
                <div className={data.emp_available?"emp_card_name_free":"emp_card_name_busy"}>
                    {data?data.emp_name:""}
                </div>

                <div className={data.emp_available?"emp_card_status_free":"emp_card_status_busy"}>
                    {data.emp_available?"Free":"Busy"}
                </div>
            </div>
        </>
    )
}

export default EmployeeCard;