import React from "react";
import styles from "./Login.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Signup from "./Signup";

const Login = () => {
  const [back, setBack] = useState(true);
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();
  var signup = JSON.parse(localStorage.getItem("signupForm"));

  const submitLogin = (e) => {
    e.preventDefault();
    if (mobile === "" || mobile.length < 10) {
      alert("Please enter 10 digit mobile number");
    } else {
      if (mobile !== signup.phone) {
        alert("Enter a Registered mobile number");
      } else {
        navigate("/otp");
      }
    }
  };
  return (
    <>
      <div className={styles.Alogin}>
        <div className={styles.ALoginheading}>Log in to get started</div>
        {back && (
          <Link to="/">
            <img
              src="https://mamaearth.in/static/mamaearth/close.svg"
              onClick={() => setBack(false)}
              className={styles.AloginBack}
              alt="mama"
            />
          </Link>
        )}
        <div className="Aintero">
          <div>
            <img
              src="https://mamaearth.in/static/mamaearth/login.svg"
              alt="mama"
            />
          </div>
          <div className={styles.Atext}>
            Get access to your orders, track previous order & Redeem Mama Cash
          </div>
        </div>
        <div>
          <form onSubmit={submitLogin} className={styles.AloginForm}>
            <div className={styles.AinputDiv}>
              <input
                onChange={(e) => setMobile(e.target.value)}
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
            <input
              type="submit"
              value="Login with OTP"
              className={styles.AloginButton}
              placeholder="Login with OTP"
              required
            />
          </form>
        </div>
        <hr />
        <div className={styles.AGuest}>
          <p>If you are not registered yet, you can SignUp</p>
          <Link to="/signup">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
