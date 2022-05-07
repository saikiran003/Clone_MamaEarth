import React from "react";
import styles from "./Login.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Signup from "./Signup";

const Login = () => {
  const [back, setBack] = useState(true);
  const [mobile, setMobile] = useState("");
  const [goSignup, setGoSignup] = useState(false);

  const goBackToHome = () => {
    setBack(false);
  };

  const loginWithOtp = (e) => {
    setMobile(e.target.value);
  };

  const submitLogin = (e) => {
    e.preventDefault();
    if (mobile === "" || mobile < 10) {
      alert("Please enter a mobile number");
    }
    else{
        setGoSignup(true);
    }
  };

  return (
    <>
     
      {!goSignup? ( <div className={styles.Alogin}>
        <div className={styles.ALoginheading}>Log in to get started</div>
        {back && (
          <Link to="/">
            <img
              src="https://mamaearth.in/static/mamaearth/close.svg"
              onClick={goBackToHome}
              className={styles.AloginBack}
              alt=""
            />
          </Link>
        )}
        <div className="Aintero">
          <div>
            <img src="https://mamaearth.in/static/mamaearth/login.svg" alt="" />
          </div>
          <div className={styles.Atext}>
            Get access to your orders, track previous order & Redeem Mama Cash
          </div>
        </div>
        <div>
          <form onSubmit={submitLogin} className={styles.AloginForm}>
            <div className={styles.AinputDiv}>
              <input
                onChange={loginWithOtp}
                type="number"
                placeholder="Phone Number"
                value={mobile}
                className={styles.ALoginInput} 
                required
              />
              <div className={styles.Apopup}></div>
            </div>

            <div>
              By Continuing, you agree to Mamaearth's{" "}
              <span>terms and Conditions</span> and <span>Privacy Policy</span>
            </div>
            <Link to ="/otp">
            <input
                  type="submit"
                  value="Login with OTP"
                  className={styles.AloginButton}
                  placeholder="Login with OTP"
                  required
                />
                </Link>
            
          </form>
          
        </div>
        <hr />
        <div className={styles.AGuest}>
          <Link to="/signup">
          <button type="button" className="btn btn-primary">Sign Up</button>
          </Link>
        </div>
      </div>) :


         <Signup/>
           
     }
    </>
  );
};

export default Login;
