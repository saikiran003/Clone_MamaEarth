import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    
        <div className={styles.Afooter}>
        <div id="AfootermainDiv">

            <div className={styles.AshippingAndQueries}>
                <div className={styles.Ashipping}>
                    <div>
                        <div align="center">
                            <img src="https://mamaearthp.imgix.net/wysiwyg/delivery2x.png?auto=format" />
                        </div>
                        <div style="text-align: center;" >
                            <h3>Free Shipping</h3>
                            <p>On Orders Above Rs. 399</p>
                        </div>
                     </div>
                     <div>
                        <div align="center">
                            <img src="https://mamaearthp.imgix.net/wysiwyg/Group_81512x.png?auto=format" />
                        </div>
                        <div style="text-align: center;">
                            <h3>COD Available</h3>
                            <p>@ Rs. 40 Per Order</p>
                        </div>
                     </div>
                </div>
                
                <div className={styles.Aqueries}>
                    <div>
                        <h3>Have Queries or Concerns?</h3>
                    </div>
                    <div align="center">
                        <button  className={styles.AfooterContact} >CONTACT US</button>
                    </div>
                </div>
            </div>

            <div className={styles.ApaymentDiv}>
                <div>
                    <h3>PAYMENT</h3>
                </div>
                <div style={{color:'rgb(150,202,65)', fontSize: '14px'}}>
                    <img style={{height:'12px'}} src="https://mamaearthp.imgix.net/wysiwyg/noun_trusted_27146262x_6Ekja92.png?auto=format" alt="" />
                    100% Payment Protection, Easy Return Policy
                </div>
                <div style={{display:'flex',justifyContent: 'center', gap:'15px',marginTop: '7px'}}
                                        
                >
                    <img src="https://mamaearthp.imgix.net/wysiwyg/visa2x.png?auto=format&fit=scale" alt="" />
                    <img src="https://mamaearthp.imgix.net/wysiwyg/master_card2x.png?auto=format&fit=scale" alt="" />
                    <img src="https://mamaearthp.imgix.net/wysiwyg/american_express2x.png?auto=format&fit=scale" alt="" />
                    <img src="https://mamaearthp.imgix.net/wysiwyg/net_banking2x.png?auto=format&fit=scale" alt="" />
                </div>
            </div>

            <div className={styles.AcertificatesMainDiv}>
                <div className={styles.Acertificates}>
                    <img src="https://mamaearthp.imgix.net/wysiwyg/dermatology-tested-100x1002x.png?auto=format" alt="" />
                    <span>Dermatologically
                        Tested</span>
                </div>
                <div className={styles.Acertificates}>
                    <img src="https://mamaearthp.imgix.net/wysiwyg/fda-100x1002x.png?auto=format" alt="" />
                    <span>FDA
                        Approved</span>
                </div>
                <div className={styles.Acertificates}>
                    <img src="https://mamaearthp.imgix.net/wysiwyg/MadeSafeImages13Jan/madesafe13janlogo.png?auto=format" alt="" />
                    <span>Made Safe
                        Certified</span>
                </div>
                <div className={styles.Acertificates}>
                    <img src="https://mamaearthp.imgix.net/wysiwyg/cruelty-free_SjVJgQA.png?auto=format" alt="" />
                    <span>Cruelty
                        Free</span>
                </div>
            </div>

            <div className={styles.AfooterLinks}>
                 <div>
                     <h3>USEFUL LINKS</h3>
                     <ul>
                         <li>
                             <a>Privacy Policy</a>
                         </li>
                         <li>
                             <a>Returns</a>
                         </li>
                         <li>
                             <a>Terms & COnditions</a>
                         </li>
                         <li>
                            <a>Terms & COnditions-Cashback</a>
                         </li>
                         <li>
                             <a>FAQs</a>
                         </li>
                         <li>
                             <a>We're Safe</a>
                         </li>
                         <li>
                             <a>Track Order</a>
                         </li>
                         <li>
                             <a>COntact Us</a>
                         </li>
                         <li>
                             <a>Sitemap</a>
                         </li>
                         <li>
                             <a>About us</a>
                         </li>
                     </ul>
                 </div>
                 <div>
                     <h3>CATEGORIES</h3>
                     <ul>
                         <li>
                             <a>Baby</a>
                         </li>
                         <li>
                             <a>Beauty</a>
                         </li>
                         <li>
                             <a>Hair</a>
                         </li>
                         <li>
                             <a>Face</a>
                         </li>
                         <li>
                             <a>Body</a>
                         </li>
                         <li>
                             <a>Gift Pack</a>
                         </li>
                     </ul>
                 </div>
                 <div>
                     <h3>MY ACCOUNT</h3>
                     <ul>
                         <li>
                             <a>Account</a>
                         </li>
                         <li>
                             <a>Orders</a>
                         </li>
                         <li>
                             <a>Addresses</a>
                         </li>
                     </ul>
                 </div>
                 <div className={styles.AfooterEconomivs}>
                    <img src="https://mamaearthp.imgix.net/wysiwyg/Best-Brand500x5002x.png?auto=format" alt="" />
                 </div>
            </div>
            <div className={styles.AfooterLastDIv}>
                <h3>SHOW US SOME <i className="fa-solid fa-heart"></i> ON SOCIAL MEDIA</h3>
                <div className={styles.AfooterIcon}>
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-youtube"></i>
                    <i className="fa-brands fa-pinterest"></i>
                    <i className="fa-light fa-envelope"></i>
                </div>
            </div>
            <div style={{padding: '14 px', textAlign: 'center', fontSize: '14 px', borderBottom: 'solid #5c5c5c 1px'}}>
                © 2022 Honasa Consumer Pvt. Ltd. All Rights Reserved
            </div>
        </div>
    </div>
   
  )
}

export default Footer