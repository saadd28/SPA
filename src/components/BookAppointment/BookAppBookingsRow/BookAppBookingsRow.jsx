import './BookAppBookingsRow.css'

const BookAppBookingsRow = ({data}) => {
    return(
        <>
            <tr className='book_app_booking_row_positions'>
                <td className='book_app_booking_row_td'>{data.service_name}</td>
                <td className='book_app_booking_row_td'>{data.service_date}</td>
                <td className='book_app_booking_row_td'>{data.service_time}</td>
                <td className='book_app_booking_row_td'>{data.service_employee}</td>
                <td className='book_app_booking_row_td'>{data.service_employee}</td>
                <td className='book_app_booking_row_td'>
                    <button className='book_app_row_edit_btn'>Edit</button>
                </td>
                <td className='book_app_booking_row_td'>
                    <button className='book_app_row_cancel_btn'>Cancel</button>
                </td>
            </tr>
        
        </>
    )
}

export default BookAppBookingsRow;