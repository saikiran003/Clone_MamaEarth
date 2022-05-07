import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from "./Otp.module.css"

const Otp = () => {

    const [inputOtp, setInputOtp] = useState({});
    const [submitOtp, setSubmitOtp] = useState([]);
    const [loginSuccess, setLoginSuccess] = useState(false)

    const handleChange =(e)=>{
        let otp = e.target
        setInputOtp({ 
            ...inputOtp,
            [otp.name]: otp.value,  
         });
    }

    const formSubmit = (e) => {
        e.preventDefault();
        setSubmitOtp(inputOtp);
        if((submitOtp.otp1+submitOtp.otp2+submitOtp.otp3+submitOtp.otp4 )==="1234"){
            alert("Login Successful")
            setLoginSuccess(true)
        }
    }

    



  return (
      <>
    
    {
        !loginSuccess ? (
            <div className={styles.AotpPage}>
        <div className={styles.AotpHead}>
        <img src="https://mamaearth.in/static/mamaearth/arrow_back.svg" onClick="location.href='./login.html' " className={styles.AotpBack} alt="" />Verify OTP</div>
       <div className={styles.Aotping}>
           <img src="https://mamaearth.in/static/mamaearth/otp.svg" alt="" />
       </div>
       <div className={styles.AotpInputForm}>
           <div className={styles.AotpInputDiv}>
               Sent to
               <a>XXXXXX<span className={styles.Alast4Digit}></span>
                   <img src="https://mamaearth.in/static/mamaearth/pen.svg" height="12px" width="10px"  onClick="window.location.href='./login.html' " alt="" />
               </a>
           </div>
           <div className={styles.AEnterText}>Enter OTP</div>
           <form onSubmit={formSubmit} >
           <div className={styles.AotpinptField}>
                <input onChange={handleChange} autocomplete="off" className={styles.otpfield} type="number" name="otp1" maxlength="1" />
                <input onChange={handleChange} autocomplete="off" className={styles.otpfield} type="number" name="otp2" maxlength="1" />
                <input onChange={handleChange} autocomplete="off" className={styles.otpfield} type="number" name="otp3" maxlength="1" />
                <input onChange={handleChange} autocomplete="off" className={styles.otpfield} type="number" name="otp4" maxlength="1" />
           </div>
           <div className={styles.BpopupOTP}></div>
           <div className={styles.AresentOTP}>Resend OTP <span></span></div>
           <div className={styles.AsubmitOTP}>
               <input className={styles.verifyBtn} type="submit" value = "VERIFY" />
           </div>
           </form>
           <div className={styles.AnotShare}>DO NOT SHARE THIS OTP WITH ANYONE</div>
       </div>
    </div>
        ) :
          <div>
            <div>Happy Shopping</div>
            <Link to="/">
            <button >Explore Products</button>
            </Link>
            </div>
    }
    </>
  )
}

export default Otp