import React from 'react';
import styles from "./Signup.module.css";

const Signup = () => {
    return (
        <>
            <div className={styles.Bsignup}>
                <div style={{display:"flex",gap:"30px"}}>
                    <div>
                        <img onClick="location.href='./login.html' " src="https://mamaearth.in/static/mamaearth/arrow_back.svg" />
                    </div>
                    <div class={styles.BsignupHead}>Signup for the Goodness Inside
                    </div>
                </div>
                <div className={styles.Bform}>
                    <div className={styles.AmobDiv}>
                        <input autocomplete="off" type="text" name="phone" disabled="" placeholder="" className={styles.Bmob} value="9532334248" style={{ color: "rgb(214, 214, 214)" }} />
                    </div>
                    <div className={styles.AfnameDiv}>
                        <input type="text" placeholder="First Name*" className={styles.Bfname} value="" />
                        <div className={styles.BfnamE}></div>
                    </div>
                    <div className={styles.AlnameDiv}>
                        <input type="text" placeholder="Last Name*" className={styles.Blname} value="" />
                        <div className={styles.BlnamE}></div>
                    </div>
                    <div className={styles.AmailDiv}>
                        <input type="email" placeholder="Email ID*" className={styles.Bmail} value="" />
                        <div className={styles.ABmaIL}></div>
                    </div>
                    <div className={styles.BgeNDErMainHead}>
                        <p style={{ marginBottom: "0px" }}>Gender</p>
                        <div>
                            <label className={styles.BgenderLabel}>
                                <input type="radio" name="gendEr" className={styles.Bgender} value="Male" />
                                Male
                            </label>
                            <label className={styles.BgenderLabel}>
                                <input type="radio" name="gendEr" className={styles.Bgender} value="Female" />
                                Female
                            </label>
                            <label className={styles.BgenderLabel}>
                                <input type="radio" name="gendEr" className={styles.Bgender} value="Not specified" />
                                Not specified
                            </label>
                        </div>
                        <div className={styles.BgendeR}></div>
                    </div>
                    <div>
                        <input type="date" value="" name="dob" className={styles.Bdob} />
                        <div className={styles.BdatE}></div>
                    </div>
                    <div className={styles.BsignupButton}>SIGN UP</div>
                </div>
            </div>
        </>
    )
}

export default Signup