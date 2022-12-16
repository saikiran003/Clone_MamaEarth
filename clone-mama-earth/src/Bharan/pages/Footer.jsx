import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Footer.module.css";

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <footer>
        <div className={styles.AOT_footer}>
          <div className={styles.AOT_Div1}>
            <div className={styles.AOT_inner_1main}>
              <div className={styles.AOT_inner1_div1}>
                <span>
                  <img
                    src={
                      "https://mamaearthp.imgix.net/wysiwyg/mobile-truck.png?auto=format"
                    }
                    alt=""
                  />
                </span>
                <p>Free Shipping</p>
                <p className={styles.AOT_inner1_div1_p}>
                  On Orders Above Rs.399
                </p>
              </div>
              <div className={styles.AOT_inner1_divm}></div>
              <div className={styles.AOT_inner1_div2}>
                <span>
                  <img
                    src={
                      "https://mamaearthp.imgix.net/wysiwyg/mobile-wallet.png?auto=format"
                    }
                    alt=""
                  />
                </span>
                <p>COD Available</p>
                <p className={styles.AOT_inner1_div1_p}>@Rs. 40 Per Order</p>
              </div>
            </div>
            <div className={styles.AOT_innerdiv3}>
              <p>Have Queries or Concerns</p>
              <button onClick={() => navigate("ContactUs")}>CONTACT US</button>
            </div>
          </div>

          <div className={styles.AOT_Div2}>
            <div className={styles.AOT_inner2_div1}>
              <p>PAYMENT</p>
              <div className={styles.AOT_inner2_mid}>
                <div className={styles.AOT_div2_img1}>
                  <img
                    src={
                      "https://mamaearthp.imgix.net/wysiwyg/noun_trusted_27146262x_6Ekja92.png?auto=format"
                    }
                    alt=""
                  />
                </div>
                <p>100% Payment Protection, Easy Return Policy</p>
              </div>
              <div className={styles.AOT_inner2_mid1}>
                <div>
                  <img
                    src={
                      "https://mamaearthp.imgix.net/wysiwyg/visa2x.png?auto=format&fit=scale"
                    }
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src={
                      "https://mamaearthp.imgix.net/wysiwyg/master_card2x.png?auto=format&fit=scale"
                    }
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src={
                      "https://mamaearthp.imgix.net/wysiwyg/american_express2x.png?auto=format&fit=scale"
                    }
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src={
                      "https://mamaearthp.imgix.net/wysiwyg/rupay2x.png?auto=format&fit=scale"
                    }
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src={
                      "https://mamaearthp.imgix.net/wysiwyg/net_banking2x.png?auto=format&fit=scale"
                    }
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className={styles.AOT_inner2_div2}>
              <div>
                <img
                  src={
                    "https://mamaearthp.imgix.net/wysiwyg/dermatology-tested-100x1002x.png?auto=format"
                  }
                  alt=""
                />
                <p>Dermatologically Tested</p>
              </div>
              <div>
                <img
                  src={
                    "https://mamaearthp.imgix.net/wysiwyg/fda-100x1002x.png?auto=format"
                  }
                  alt=""
                />
                <p>FDA Approved</p>
              </div>
              <div>
                <img
                  src={
                    "https://mamaearthp.imgix.net/wysiwyg/MadeSafeImages13Jan/madesafe13janlogo.png?auto=format"
                  }
                  alt=""
                />
                <p>Made Safe Certified</p>
              </div>
            </div>
          </div>

          <div className={styles.AOT_Div3}>
            <div className={styles.AOT_inner1_div3}>
              <label>USEFUL LINKS</label>
              <div>
                <Link to="">Privacy Policy</Link>
              </div>
              <div>
                <Link to="">Returns</Link>
              </div>
              <div>
                <Link to="">Terms & Conditions</Link>
              </div>
              <div>
                <Link to="">Terms & Conditions-Cashback</Link>
              </div>
              <div>
                <Link to="">FAQs</Link>
              </div>
              <div>
                <Link to="">We're Safe</Link>
              </div>
              <div>
                <Link to="">Track Order</Link>
              </div>
              <div>
                <Link to="">Contact Us</Link>
              </div>
              <div>
                <Link to="">Sitemap</Link>
              </div>
              <div>
                <Link to="">About Us</Link>
              </div>
            </div>
            <div className={styles.AOT_inner1_div3}>
              <label>CATEGORIES</label>
              <div>
                <Link to="/Baby">Baby</Link>
              </div>
              <div>
                <Link to="/Beauty">Beauty</Link>
              </div>
              <div>
                <Link to="/Hair">Hair</Link>
              </div>
              <div>
                <Link to="/Face">Face</Link>
              </div>
              <div>
                <Link to="/Body">Body</Link>
              </div>
              <div>
                <Link to="/Cart">cart</Link>
              </div>
              <div>
                <Link to="">Gift Pack</Link>
              </div>
            </div>
            <div className={styles.AOT_inner1_div3}>
              <label>MY ACCOUNT</label>
              <div>
                <Link to="">Account</Link>
              </div>
              <div>
                <Link to="">Orders</Link>
              </div>
              <div>
                <Link to="">Addresses</Link>
              </div>
            </div>
            <div className={styles.AOT_inner1_div3_img1}>
              <img
                src={
                  "https://mamaearthp.imgix.net/wysiwyg/Best-Brand500x5002x.png?auto=format"
                }
                alt=""
              />
            </div>
          </div>

          <div className={styles.AOT_Div4}>
            <div className={styles.AOT_inner1_div4}>
              <p>SHOW US SOME</p>
              <span>❤</span>
              <p>ON SOCIAL MEDIA</p>
            </div>
            <div className={styles.AOT_socialDivs}>
              <div>
                <Link to="https://www.facebook.com/Mamaearthindia/">
                  <i class="fab fa-facebook-f"></i>
                </Link>
              </div>
              <div>
                <Link to="">
                  <i class="fab fa-twitter"></i>
                </Link>
              </div>
              <div>
                <Link to="">
                  <i class="fab fa-instagram"></i>
                </Link>
              </div>
              <div>
                <Link to="">
                  <i class="fab fa-youtube"></i>
                </Link>
              </div>
              <div>
                <Link to="">
                  <i class="fab fa-pinterest"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.AOT_Div5}>
            <p>© 2022 Honasa Consumer Pvt. Ltd. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};
