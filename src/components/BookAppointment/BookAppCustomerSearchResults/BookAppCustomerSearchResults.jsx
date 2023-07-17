import './BookAppCustomerSearchResults.css'

const BookAppCustomerSearchResults = ({ data , setissearch}) => {

    return (

        <>
            <div className="customer_search_result_container" onClick={event =>{
                setissearch(false)
            }}>
                <div className="customer_search_result_name">
                    {data.customer_name}
                </div>

                <div className="customer_search_result_name">
                    {data.customer_phone}
                </div>
            </div>

        </>
    )
}

export default BookAppCustomerSearchResults;