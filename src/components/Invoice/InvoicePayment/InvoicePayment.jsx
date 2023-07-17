import './InvoicePayment.css'
import Modal from 'react-modal';



const disableScrollOnOpen = () => {
    document.body.style.overflow = "hidden";
};
const disableScrollOnClose = () => {
    document.body.style.overflow = "auto";
};


const InvoicePayment = ({ paymentpopup, setpaymentpopup }) => {


    return (
        <Modal className={"inv_payment_container"} overlayClassName="modal_Overlay"
            onAfterOpen={disableScrollOnOpen}
            onAfterClose={disableScrollOnClose}
            isOpen={paymentpopup}
            shouldCloseOnOverlayClick={true}
            onRequestClose={() => {
                setpaymentpopup(false)
                console.log("paymentpopup", paymentpopup)
            }}
            shouldCloseOnEsc={true}

        >

            <div className='inv_payment_heading'>
                Payment
            </div>

            <div className="inv_payment_paymentmethod_dropdown_wrapper">
                <select name="payment_method" id="payment_method" className='inv_payment_paymentmethod_dropdown'>
                    <option value="payment_method">Select Payment Method</option>
                    <option value="online">Online</option>
                    <option value="onsite">On-Site</option>
                </select>
            </div>


            <input type="text" placeholder='Enter amount' className='inv_payment_amount_input' />

            <button className='inv_payment_pay_btn'>Pay</button>



        </Modal>
    )
}

export default InvoicePayment;