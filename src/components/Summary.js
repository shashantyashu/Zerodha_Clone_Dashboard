import React from "react";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useCookies } from "react-cookie";
// import axios from "axios";
// import Cookiess from "universal-cookie";

const Summary = () => {
  // const navigate = useNavigate();
  // const [cookies, removeCookies] = useCookies([]);
  // const [username, setUsername] = useState("");
  // const cookiess = new Cookiess();

  // useEffect(() => {
  //   const verifyCookie = async () => {
  //     // console.log(cookies.token); this dons't work .
  //     // console.log("Token:", cookiess.get("token")); // that why this i have used this method.
  //     // console.log(localStorage.getItem("token"));
  //     // if (!cookiess.get("token")) {
  //     const token = localStorage.getItem("token");
  //     if (!token) {
  //       setTimeout(() => {
  //         navigate("/login");
  //       }, 10);
  //     }
  //     // const { data } = await axios.post(
  //     //   "https://zerodha-clone-backend-9l0d.onrender.com",
  //     //   {},
  //     //   { withCredentials: true }
  //     // );
  //     const { data } = await axios.get(
  //       "https://zerodha-clone-backend-9l0d.onrender.com/protected-route", // update with your backend's verify route
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     console.log(data);
  //     const { status, user } = data;
  //     setUsername(user);
  //     return status;
  //   };

  //   verifyCookie();
  // }, [cookies, navigate, removeCookies]); 


  // useEffect(() => {
  //   const verifyCookie = async () => {
  //     try {
  //       const token = localStorage.getItem("token");
  //       if (!token) {
  //         setTimeout(() => {
  //           console.log("fail-1")
  //           navigate("/login");
  //         }, 10);
  //         return;
  //       }
  
  //       console.log("Token found:", token);
  
  //       const { data } = await axios.get(
  //         "https://zerodha-clone-backend-9l0d.onrender.com/protected-route",
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );
  
  //       console.log("API Response:", data);
  
  //       // const { status, user } = data;
  //       if (data.status === true) {
  //         setUsername(data.user);
  //       } else {
  //         setTimeout(() => {
  //           console.log("fail-2");
  //           navigate("/login");
  //         }, 10);
  //       }
  //     } catch (error) {
  //       console.error("Error verifying token:", error);
  //       setTimeout(() => {
  //         console.log("fail-3");
  //         navigate("/login");
  //       }, 10);
  //     }
  //   };
  
  //   verifyCookie();
  // }, [cookies, navigate, removeCookies]);

  // const Logout = () => {
  //   removeCookies("token");
  //   navigate("/signup");
  // };

  return (
    <>
      <div className="Logout">
        <button >Logout</button>    
      </div>
      {/* onClick={Logout} */}
      <div className="username">
        <h6>Hi, !</h6>
        {/* {username} */}
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings (13)</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              1.55k <small>+5.20%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>31.43k</span>{" "}
            </p>
            <p>
              Investment <span>29.88k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
