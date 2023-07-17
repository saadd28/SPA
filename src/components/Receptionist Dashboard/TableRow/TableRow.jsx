import { useNavigate } from 'react-router-dom';
import './TableRow.css'
import moment from 'moment/moment';
// import 'System.Globalization'


const TableRow = ({ data }) => {

    const navigate = useNavigate();
    return (
        <>
            <tr className="table_row">
                <td className='table_data'>{
                    moment(data.booking_details[0].start_datetime.split(".")[0]).format("D MMM YY")}</td>
                <td className='table_data'>{
                    moment(data.booking_details[0].start_datetime.split(".")[0]).format('LT') + ' - ' + moment(data.booking_details[0].end_datetime.split(".")[0]).format('LT')
                }</td>
                <td className='table_data'>{data.customer_name}</td>
                <td className={
                    data.payment_status_id === 13 ? "table_data table_data_paid_status_style" : "table_data table_data_unpaid_status_style"
                } >{data.payment_status_id === 13 ? "Paid" : "Unpaid"}</td>
                <td className='table_data'>{data.booking_details[0].service_name + " | " + data.booking_details[0].employee_name}</td>
                <td className='table_data'> <button onClick={event => {
                    navigate('/appointmentdetails', {state:
                    {
                        datatosend:data
                    }})
                }}>See Details</button> </td>

            </tr>

        </>
    )
}


export default TableRow;