import React from 'react'
import styles from "./Otp.module.css"

const Otp = () => {
  return (
      <>
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
           <div className={styles.AotpinptField}>
                <input autocomplete="off" className={styles.otpfield} type="number" name="otp" maxlength="1" value=""/>
                <input autocomplete="off" className={styles.otpfield} type="number" name="otp" maxlength="1" value=""/>
                <input autocomplete="off" className={styles.otpfield} type="number" name="otp" maxlength="1" value=""/>
                <input autocomplete="off" className={styles.otpfield} type="number" name="otp" maxlength="1" value=""/>
           </div>
           <div className={styles.BpopupOTP}></div>
           <div className={styles.AresentOTP}>Resent OTP <span></span></div>
           <div className={styles.AsubmitOTP}>
               <button onClick="AsubmitmyOTP()">Verify</button>
           </div>
           <div className={styles.AnotShare}>DO NOT SHARE THIS OTP WITH ANYONE</div>
       </div>
    </div>
    </>
  )
}

export default Otp