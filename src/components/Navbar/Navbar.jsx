import "./Navbar.css";
import FlagImage from "../../img/usflag.png";
import { useNavigate } from "react-router-dom";

const Navbar = ({ islogin }) => {
  const navigate = useNavigate();
  console.log("islogin", islogin);

  return (
    <>
      <div className="navbar">
        <div className="navebar_spaname">
          <span className="navbar_spaname_style"> SALOON </span>
          SERVICES
        </div>

        {localStorage.getItem("receptionistId") ? (
          <div className="navbar_links">
            <div
              className="navbar_links_style"
              onClick={(event) => {
                navigate("/receptionist_dashboard");
              }}
            >
              Schedule
            </div>
            <div
              className="navbar_links_style"
              onClick={(event) => {
                navigate("/book_appointment");
              }}
            >
              Book Appointment
            </div>
            <div
              className="navbar_links_style"
              onClick={(event) => {
                navigate("/allemployees");
              }}
            >
              Employees
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="navbar_buttons">
          <button
            className="navbar_join_btn"
            onClick={(event) => {
              if (localStorage.getItem("receptionistId")) {
                // localStorage.removeItem("receptionistId");
                // localStorage.removeItem("receptionistName");
                // localStorage.removeItem("branchName");

                localStorage.clear();
                navigate("/login");
              } else {
                navigate("/login");
              }
            }}
          >
            {localStorage.getItem("receptionistId") ? "Logout" : "Join Now"}
          </button>

          {localStorage.getItem("receptionistId") ? (
            ""
          ) : (
            <div className="navbar_dropdownbox">
              <img src={FlagImage} alt="flag" />
              <select name="language" id="language" className="navbar_dropdown">
                <option value="english">English</option>
                <option value="arabic">Arabic</option>
              </select>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
