import InvoiceRow from "./InvoiceRow/InvoiceRow";
import "./Invoice.css";
import React, { useState } from "react";
import InvoicePayment from "./InvoicePayment/InvoicePayment";
import { useLocation } from "react-router-dom";
import moment from "moment/moment";

const Invoice = () => {
  const [paymentpopup, setpaymentpopup] = useState(false);

  const location = useLocation();
  const data = location.state ? location.state.datatosend : "";
  const status = "Unpaid";
  // const status = "Paid";

  // console.log("data", data)

  // let data = [
  //     {
  //         name: "Massage",
  //         price: "123",
  //         quantity: "12",
  //         amount: "111"

  //     },
  //     {
  //         name: "Massage",
  //         price: "123",
  //         quantity: "12",
  //         amount: "111"

  //     }
  // ]
  let today = new Date();
  today = moment(today).format("DD/MM/YY");
  return (
    <>
      <InvoicePayment
        paymentpopup={paymentpopup}
        setpaymentpopup={setpaymentpopup}
      />
      <div className="cover_image">
        {/* <img src={ScheduleImage} alt="" /> */}
        <p className="reception_heading">Schedule</p>
      </div>

      {/* {paymentpopup? <InvoicePayment paymentpopup = {paymentpopup} setpaymentpopup = {setpaymentpopup}/> :""} */}

      <div className="invoice_main_container">
        <div className="invoice_heading_container">
          <div className="invoice_heading_style">Invoice</div>
          <div className="invoice_number_style">#9034798</div>
        </div>

        <div className="invoice_header_details_1">
          <div>
            <div className="inv_head_headings_style">Order</div>
            <div className="inv_head_content_style">{data ? data.id : ""}</div>
          </div>

          <div className="inv_head_2">
            <div className="inv_head_headings_style">Date</div>
            <div className="inv_head_content_style">{today}</div>
          </div>
        </div>

        <div className="invoice_header_details_1">
          <div>
            <div className="inv_head_headings_style">Branch</div>
            <div className="inv_head_content_style">
              {localStorage.getItem("branchName")}
            </div>
          </div>

          <div className="inv_head_2">
            <div className="inv_head_headings_style">Receptionist</div>
            <div className="inv_head_content_style">
              {localStorage.getItem("receptionistName")}
            </div>
          </div>
        </div>

        <div className="invoice_head">
          <div className="">Service</div>
          <div className="inv_box_align">
            <div className="">Price</div>
            <div className="">Qty</div>
            <div className="">Amount</div>
          </div>
        </div>

        <div className="invoice_content">
          {data.booking_details.map((item) => (
            <InvoiceRow data={item} />
          ))}
        </div>

        <hr
          style={{
            background: "#0000000D",
            marginTop: "1em",
            marginBottom: "2em",
          }}
        />

        <div className="inv_subtotal_container">
          <div className="inv_subtotal_heading">Subtotal</div>
          <div className="inv_subtotal_amount">${data.price}</div>
        </div>

        <div className="inv_subtotal_container">
          <div className="inv_subtotal_heading">VAT</div>
          <div className="inv_subtotal_amount">${data.vat}</div>
        </div>

        <div className="inv_subtotal_container">
          <div className="inv_subtotal_heading">Total</div>
          <div className="inv_total_amount">${data.net_price}</div>
        </div>

        {status === "Unpaid" ? (
          <div className="inv_coupon_container">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter  coupon"
              className="inv_coupon_input"
            />
            <button className="inv_coupon_btn">Apply</button>
          </div>
        ) : (
          ""
        )}

        <div className="inv_buttons">
          <button className="inv_download_btn">Download pdf</button>
          {status === "Unpaid" ? (
            <button
              className="inv_paynow_btn"
              onClick={() => {
                setpaymentpopup(true);
              }}
            >
              Pay Now
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Invoice;
