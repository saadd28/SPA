import "./Login.css";
import LeafImage from "../../img/leaf.png";
import CoverImage from "../../img/coverimage.png";
import { useEffect, useState } from "react";
import { LoginApiCall } from "../../api/apicalls";
import { useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from 'react-toastify';

// 510078602
// 12345678

const Login = ({ setislogin }) => {
  const navigate = useNavigate();
  const [number, setnumber] = useState("");
  const [password, setpassword] = useState("");

  const [inperrmsg, setinperrmsg] = useState("");
  const [inppswerrmsg, setinppswerrmsg] = useState("");
  const [isloading, setisloading] = useState(false);

  useEffect(() => {
    // localStorage.removeItem("receptionistId");
    // localStorage.removeItem("receptionistName");
    // localStorage.removeItem("branchName");
    localStorage.clear();
  });

  const checkformat = (str) => {
    var phoneno = /^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/;
    if (str.match(phoneno)) {
      return true;
    } else {
      return false;
    }
  };
  const update_number = (event) => {
    if (!isNaN(event.currentTarget.value)) {
      setnumber(event.target.value);
      if (event.target.value === "" || event.target.value === null) {
        setinperrmsg("");
      } else if (checkformat(event.target.value) === false) {
        setinperrmsg("Phone number is not in correct format!!");
      } else {
        setinperrmsg("");
      }
    }
  };

  const update_password = (event) => {
    setpassword(event.target.value);
    setinppswerrmsg("");
  };

  // const notify = () => {
  //     toast('Number or Password is wrong');
  // }

  const validate_number = () => {
    if (number === null || number === "") {
      setinperrmsg("Please Enter Your Number.");
    } else if (password === null || password === "") {
      setinppswerrmsg("Please Enter Your Password");
    }
    // else if (checkformat(number) === false) {
    //     setinperrmsg("Phone number is not in correct format!!");

    // }
    else {
      let obj = {
        login: {
          phone_number: number,
          password: password,
        },
      };

      setisloading(true);
      LoginApiCall(obj).then((res) => {
        console.log("res", res);
        if (res.data.data.login.error_code === 0) {
          localStorage.setItem(
            "branchName",
            res.data.data.login.result.branch.name
          );
          localStorage.setItem(
            "branchId",
            res.data.data.login.result.branch.id
          );
          localStorage.setItem("receptionistId", res.data.data.login.result.id);
          localStorage.setItem(
            "receptionistName",
            res.data.data.login.result.name
          );
          setislogin(true);
          navigate("/receptionist_dashboard", {
            state: { datatosend: res.data.data.login.result },
          });
        } else {
          // notify();
          setinperrmsg("Number or Password is wrong");
          setisloading(false);
        }
      });
      // setislogin(true)
      // navigate('/receptionist_dashboard')
    }
  };

  // document.addEventListener("keyup", function(event) {
  //     if (event.keyCode === 13) {
  //         validate_number();
  //     }
  // });

  return (
    <>
      <div className="login_main_container">
        <div>
          <img src={LeafImage} alt="" className="leaf" />
        </div>

        <div className="login_main_screen">
          <div className="login_main_screen_left">
            <div className="login_left_heading">Welcome</div>

            <p className="login_left_para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel illum
              beatae quae animi, facilis maiores dolor architecto sunt sapiente
              eveniet placeat quaerat incidunt. Reiciendis, dolores architecto?
              Necessitatibus nobis quo accusamus.
            </p>

            <div className="login_input_box">
              <div className="login_input_field_container">
                <input
                  type="text"
                  name="number"
                  id="number"
                  value={number}
                  className="login_input_number"
                  placeholder="Number"
                  onChange={(event) => update_number(event)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") validate_number();
                  }}
                />
                <div className="login_inp_error_msg">
                  {inperrmsg ? inperrmsg : ""}
                </div>
              </div>

              <div className="login_input_field_container">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="login_input_password"
                  placeholder="Password"
                  onChange={(event) => update_password(event)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") validate_number();
                  }}
                />
                <div className="login_inp_error_msg">
                  {inppswerrmsg ? inppswerrmsg : ""}
                </div>
              </div>
              <button
                className="login_signin_btn"
                onClick={(event) => {
                  validate_number();
                }}
              >
                {isloading ? "Processing..." : "Login"}
              </button>
            </div>
          </div>

          <div className="login_main_screen_right">
            <img src={CoverImage} alt="CoverImage" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
