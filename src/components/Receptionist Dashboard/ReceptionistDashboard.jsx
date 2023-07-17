import "./ReceptionistDashboard.css";
import SearchIcon from "../../img/searchicon.png";
import { useEffect, useState } from "react";
import TableRow from "./TableRow/TableRow";
import ReceptionLeafImage from "../../img/receptionleaf.png";
import { GetBookingsApiCall } from "../../api/apicalls";

const ReceptionistDashboard = () => {
  const [upcomingselected, setupcomingseleceted] = useState(true);
  const [previousselected, setpreviousseleceted] = useState(false);
  const [data_received, setdata_received] = useState(false);

  const [data, setdata] = useState();

  console.log(localStorage.getItem("branchName"));

  


  useEffect(() => {
    setdata_received(false);
    let obj = {
      getbookings: {
        user_id: 0,
        branch_id: parseInt(localStorage.getItem("branchId")),
        limit: 100,
        page: 1,
        booking_type: 0,
      },
    };

    GetBookingsApiCall(obj)
      .then((res) => {
        console.log("res", res);
        if (res.data.data.getBookings.error_code === 0) {
          setdata_received(true);
          setdata(res.data.data.getBookings.result);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <>
      <div className="cover_image">
        <p className="reception_heading">Schedule</p>
      </div>

      <div className="rec_main_screen">
        <div className="rec_searchbar">
          <input type="text" placeholder="Search here....." />
          <img src={SearchIcon} alt="searchicon" />
        </div>

        <div className="appointment_section">
          <div className="appointment_buttons">
            <button
              className={
                upcomingselected
                  ? "appointment_button_selected"
                  : "appointment_button_unselected"
              }
              onClick={(event) => {
                setupcomingseleceted(true);
                setpreviousseleceted(false);
              }}
            >
              Upcoming Appointments
            </button>
            <button
              className={
                previousselected
                  ? "appointment_button_selected"
                  : "appointment_button_unselected"
              }
              onClick={(event) => {
                setpreviousseleceted(true);
                setupcomingseleceted(false);
              }}
            >
              Previous Appointments
            </button>
          </div>

          <div className="appointment_table">
            <table
              className="table_dimensions"
              style={{
                borderSpacing: "0 10px",
                borderCollapse: "separate",
              }}
            >
              <thead>
                <tr className="table_heading_Tr">
                  <th className="table_heading">Date</th>
                  <th className="table_heading">Time</th>
                  <th className="table_heading">Customer</th>
                  <th className="table_heading">Status</th>
                  <th className="table_heading">Services</th>
                </tr>
              </thead>

              <tbody>
                {data_received
                  ? data.map((item) => <TableRow data={item} />)
                  : ""}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="reception_leaf">
        <img src={ReceptionLeafImage} alt="LeafImage" />
      </div>
    </>
  );
};

export default ReceptionistDashboard;
