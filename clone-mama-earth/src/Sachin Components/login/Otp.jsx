import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Otp.module.css";

const Otp = () => {
  const [inputOtp, setInputOtp] = useState({});
  const [submitOtp, setSubmitOtp] = useState([]);
  const [otp1, setOtp1] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");
  const [otp4, setOtp4] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();

  const formSubmit = (e) => {
    e.preventDefault();
    setSubmitOtp(inputOtp);
    if (otp1 + otp2 + otp3 + otp4 === "1234") {
      alert("Login successful");
      setLoginSuccess(true);
      navigate("/");
    } else {
      alert("Incorrect Otp");
    }
    // if (
    //   submitOtp.otp1 + submitOtp.otp2 + submitOtp.otp3 + submitOtp.otp4 ===
    //   "1234"
    // ) {
    //   alert("Login Successful");
    //   setLoginSuccess(true);
    //   navigate("/");
    // } else {
    //   alert("Incorrect Otp");
    // }
  };

  const goBackToLoginPage = (e) => {
    e.preventDefault();
    window.location.href = "login";
  };

  return (
    <>
      <div className={styles.AotpPage}>
        <div className={styles.AotpHead}>
          <Link to="login/">
            <img
              src="https://mamaearth.in/static/mamaearth/arrow_back.svg"
              onClick={goBackToLoginPage}
              className={styles.AotpBack}
              alt=""
            />
          </Link>
          Verify OTP
        </div>
        <div className={styles.Aotping}>
          <img src="https://mamaearth.in/static/mamaearth/otp.svg" alt="" />
        </div>
        <div className={styles.AotpInputForm}>
          <div className={styles.AotpInputDiv}>
            Sent to XXXXXX<span className={styles.Alast4Digit}></span>
            <img
              src="https://mamaearth.in/static/mamaearth/pen.svg"
              height="12px"
              width="10px"
              //  onClick={}
              alt=""
            />
          </div>
          <div className={styles.AEnterText}>Enter OTP</div>
          <form onSubmit={formSubmit}>
            <div className={styles.AotpinptField}>
              <input
                onChange={(e) => setOtp1(e.target.value)}
                autoComplete="off"
                className={styles.otpfield}
                type="number"
                name="otp1"
                maxLength="1"
              />
              <input
                onChange={(e) => setOtp2(e.target.value)}
                autoComplete="off"
                className={styles.otpfield}
                type="number"
                name="otp2"
                maxLength="1"
              />
              <input
                onChange={(e) => setOtp3(e.target.value)}
                autoComplete="off"
                className={styles.otpfield}
                type="number"
                name="otp3"
                maxLength="1"
              />
              <input
                onChange={(e) => setOtp4(e.target.value)}
                autoComplete="off"
                className={styles.otpfield}
                type="number"
                name="otp4"
                maxLength="1"
              />
            </div>
            <div className={styles.BpopupOTP}></div>
            <div className={styles.AresentOTP}>
              Resend OTP <span></span>
            </div>
            <div className={styles.AsubmitOTP}>
              <input
                className={styles.verifyBtn}
                type="submit"
                value="VERIFY"
              />
            </div>
          </form>
          <div className={styles.AnotShare}>
            DO NOT SHARE THIS OTP WITH ANYONE
          </div>
        </div>
      </div>
    </>
  );
};

export default Otp;
