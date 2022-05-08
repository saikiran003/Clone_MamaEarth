import React from "react";
import Credit from "./Credit";
import styles from "./Payment.module.css";
import { useSelector } from "react-redux";
// import UPI from './UPI'
import { useState } from "react";
import OrderSuccess from "./OrderSuccess";

const Payment = () => {
  const [isSuccess, setIssuccess] = useState(false);
  const [name, setName] = useState("");
  const [pin, setPin] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const data = useSelector((state) => state.cart);
  const user = JSON.parse(localStorage.getItem("signupForm"))
  var total = 0;

  const showSuccess = () => {
    setIssuccess(!isSuccess);
  };

  return (
    <>
      {isSuccess ? (
        <div className={styles.divSucc}>
          <OrderSuccess name={name} pin={pin} city={city} state={state} />
        </div>
      ) : null}

      <div className={styles.mainDiv}>
        {/* div partition */}
        <div className={styles.pageDiv}>
          <div className={styles.leftDiv}>
            <div className={styles.welcome}>Hi {user.firstName + " "+ user.lastname}, Welcome to Mamaearth</div>
            <div className={styles.address}>New Delivery Address</div>
            <form>
              <div className={styles.firstFlx}>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  name="f_name"
                  id="f_name"
                  placeholder="First Name*"
                  required
                />
                <input
                  type="text"
                  name="l_name"
                  id="l_name"
                  placeholder="Last Name*"
                  required
                />
              </div>

              <div className={styles.secFlx}>
                <input
                  type="email"
                  name="p_email"
                  id="p_email"
                  placeholder="Email ID*"
                />
                <input
                  type="number"
                  name="p_num"
                  id="p_num"
                  placeholder="Phone Number*"
                />
              </div>

              <div className={styles.thirdFlx}>
                <input
                  type="number"
                  onChange={(e) => setPin(e.target.value)}
                  name="p_pin"
                  id="p_pin"
                  placeholder="PIN Code*"
                />
                <input
                  type="text"
                  onChange={(e) => setCity(e.target.value)}
                  name="p_city"
                  id="p_city"
                  placeholder="City*"
                />
                <input
                  type="text"
                  onChange={(e) => setState(e.target.value)}
                  name="p_state"
                  id="p_state"
                  placeholder="State*"
                />
              </div>

              <div className={styles.fourDiv}>
                <input
                  type="text"
                  name="p_add"
                  id="p_add"
                  placeholder="Address(House No, Building, Street, Area)*"
                />
              </div>
              {/* <span className={styles.len}>0/255</span> */}

              <div className={styles.selectAdd}>
                Select the type of the Address
              </div>

              <div className={styles.addOpt}>
                <button className={`${styles.addOpt1} ${styles.active}`}>
                  Home
                </button>
                <button className={styles.addOpt1}>Work</button>
                <button className={styles.addOpt1}>Other</button>
              </div>

              <div className={styles.chkFlx}>
                <input
                  type="checkbox"
                  className={styles.default}
                  id="default"
                  name="default"
                  value="true"
                />
                <label for="default" className={styles.lbl}>
                  &nbsp; Make this as my default address
                </label>
              </div>
              <div className={styles.paymentPara}>Choose payment method</div>

              {/* Payment Methods */}
              <div className={styles.radPay}>
                <div className={styles.radioBtn}>
                  <div className={styles.radioFlx}>
                    <div>
                      <input type="radio" name="radio" />
                    </div>
                    <div>
                      <label>UPI</label>
                    </div>
                  </div>
                  <div className={styles.radioFlx}>
                    <div>
                      <input type="radio" name="radio" />
                    </div>
                    <div>
                      <label>Credit/Debit Card</label>
                    </div>
                  </div>
                  <div className={styles.radioFlx}>
                    <div>
                      <input type="radio" name="radio" />
                    </div>
                    <div>
                      <label>Net Banking</label>
                    </div>
                  </div>
                  <div className={styles.radioFlx}>
                    <div>
                      <input type="radio" name="radio" />
                    </div>
                    <div>
                      <label>Wallets</label>
                    </div>
                  </div>
                  <div className={styles.radioFlx}>
                    <div>
                      <input type="radio" name="radio" />
                    </div>
                    <div>
                      <label>Cash on Delivery</label>
                    </div>
                  </div>
                </div>
                <div className={styles.upiComp}>
                  {/* <UPI/> */}
                  <Credit showSuccess={showSuccess} />
                </div>
              </div>
            </form>
          </div>

          <div className={styles.rightDiv}>
            <div className={styles.parentDiv}>
              <div className={styles.rightHead}>
                <div className={styles.r1}>Order Summary </div>
                <div className={styles.r2}>CHANGE</div>
              </div>
              {data.map((item) => {
                  total = total + Number(item.qty) * Number(item.price);
                return (
                  <>
                    <div className={`${styles.itemDetails} `}>
                      <div>
                        <img
                          src={item.pImg} alt={item.name}
                          className={styles.itmImg}
                        />
                      </div>
                      <div>
                        <p>
                         {item.name}
                        </p>
                        <div className={styles.prcFlx}>
                          <div style={{ fontWeight: "bold" }}>₹{item.price}</div>
                          <div>Qty:{item.qty}</div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>

            {/* Price Summary */}
            <div className="heaven">
            <img src="https://mamaearth.in/static/mamaearth/ruppee.svg"alt="rupee"/>
            <span class="savings">
              You save <span style={{color:"#59A30E"}}>₹{(0.05 * total).toFixed(2)}</span> on
              this order
            </span>
          </div>
            <div className={styles.priceSumm}>Price Summary</div>
            <div className={styles.ordTot}>
              <div>Order Total</div>
              <div>₹{total.toFixed(2)}</div>
            </div>

            <div className={styles.shipp}>
              <div>Shipping</div>
              <div>
                <strike>₹40</strike>
                <span className={styles.free}>Free</span>
              </div>
            </div>

            <div className={styles.onDisc}>
              <div>5% online payment discount</div>
              <div>-₹{(0.05 * total).toFixed(2)}</div>
            </div>

            <div className={styles.grandTot}>
              <div>Grand Total</div>
              <div>₹{(total - (0.05 * total).toFixed(2)).toFixed(2)}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
