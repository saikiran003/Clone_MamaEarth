import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styles from "./Signup.module.css";

const Signup = () => {
  // const [inputName, setInputName] = useState({});
  const [formData, setFormData] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const data = e.target;
    setFormData({
      ...formData,
      [data.name]: data.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setFormData(inputName);
    localStorage.setItem("signupForm", JSON.stringify(formData));

    navigate("/profile");
  };
  return (
    <>
      <div className={styles.Bsignup}>
        <div style={{ display: "flex", gap: "30px" }}>
          <div>
            <Link to="/login">
              <img
                src="https://mamaearth.in/static/mamaearth/arrow_back.svg"
                alt=""
              />
            </Link>
          </div>
          <div className={styles.BsignupHead}>
            Signup for the Goodness Inside
          </div>
        </div>
        <div className={styles.Bform}>
          <form onSubmit={handleSubmit}>
            <div className={styles.AmobDiv}>
              <input
                required
                onChange={handleChange}
                autoComplete="off"
                type="number"
                name="phone"
                disabled=""
                placeholder="Enter Your Mobile Number"
                className={styles.Bmob}
                style={{ color: "rgb(214, 214, 214)" }}
              />
            </div>
            <div className={styles.AfnameDiv}>
              <input
                required
                onChange={handleChange}
                type="text"
                placeholder="First Name*"
                className={styles.Bfname}
                name="firstName"
              />
              <div className={styles.BfnamE}></div>
            </div>
            <div className={styles.AlnameDiv}>
              <input
                required
                onChange={handleChange}
                type="text"
                placeholder="Last Name*"
                className={styles.Blname}
                name="lastname"
              />
              <div className={styles.BlnamE}></div>
            </div>
            <div className={styles.AmailDiv}>
              <input
                required
                onChange={handleChange}
                type="email"
                placeholder="Email ID*"
                className={styles.Bmail}
                name="email"
              />
              <div className={styles.ABmaIL}></div>
            </div>
            <div className={styles.BgeNDErMainHead}>
              <p style={{ marginBottom: "0px" }}>Gender</p>
              <div>
                <label className={styles.BgenderLabel}>
                  <input
                    required
                    onChange={handleChange}
                    type="radio"
                    name="gender"
                    className={styles.Bgender}
                    value="Male"
                  />
                  Male
                </label>
                <label className={styles.BgenderLabel}>
                  <input
                    required
                    onChange={handleChange}
                    type="radio"
                    name="gender"
                    className={styles.Bgender}
                    value="Female"
                  />
                  Female
                </label>
                <label className={styles.BgenderLabel}>
                  <input
                    required
                    onChange={handleChange}
                    type="radio"
                    name="gender"
                    className={styles.Bgender}
                    value="Not specified"
                  />
                  Not specified
                </label>
              </div>
              <div className={styles.BgendeR}></div>
            </div>
            <div>
              <p style={{ marginBottom: "0px" }}>Date of Birth</p>
              <input
                required
                onChange={handleChange}
                type="date"
                name="dob"
                className={styles.Bdob}
              />
              <div className={styles.BdatE}></div>
            </div>
            <input
              type="submit"
              value="SIGN UP"
              className={styles.BsignupButton}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
