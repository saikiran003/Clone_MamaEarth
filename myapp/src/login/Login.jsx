import React from 'react';
import styles from "./Login.module.css"

const Login = () => {
    return (
        <>
            <div className={styles.Alogin}>
                <div className={styles.ALoginheading}>Log in to get started</div>
                <img src="https://mamaearth.in/static/mamaearth/close.svg" onclick="location.href='./index.html' " className={styles.AloginBack} />
                <div class="Aintero">
                    <div>
                        <img src="https://mamaearth.in/static/mamaearth/login.svg" />
                    </div>
                    <div className={styles.Atext}>Get access to your orders, track
                        previous order & Redeem Mama
                        Cash
                    </div>
                </div>
                <div>
                    <form className={styles.AloginForm}>
                        <div className={styles.AinputDiv}>
                            <input type="number" placeholder="Phone Number" value="" className={styles.ALoginInput} oninput="checkInput() " onfocus="checkInput()" />
                            <div className={styles.Apopup}></div>
                        </div>

                        <div>
                            By Continuing, you agree to Mamaearth's <span>terms and Conditions</span> and <span>Privacy Policy</span>
                        </div>
                        <div className={styles.AloginButton}>
                            Login with OTP
                        </div>
                    </form>
                </div>
                <div className={styles.AGuest}>
                    <a href="index.html">
                        CONTINUE AS A GUEST
                    </a>
                </div>
            </div>
        </>
    )
}

export default Login