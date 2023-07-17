import "./InvoiceRow.css";

const InvoiceRow = ({ data }) => {
  return (
    <>
      <div className="invoice_row">
        <div className="invoice_row_content" style={{
            paddingLeft:"3%"
        }}>{data.service_name}</div>
        <div className="inv_box_align">
          <div className="invoice_row_content">${data.price}</div>
          <div className="invoice_row_content">1</div>
          <div className="invoice_row_content">${data.price}</div>
        </div>
      </div>
    </>
  );
};

export default InvoiceRow;
