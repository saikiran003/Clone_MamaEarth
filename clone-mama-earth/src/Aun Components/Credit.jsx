import React from "react";
import styles from "./Credit.module.css";

const Credit = ({ showSuccess }) => {
  console.log(showSuccess);
  return (
    <div className={styles.creditMain}>
      <div className={styles.one}>
        <div>Pay Using Credit Or Debit Cards</div>
        <div>Applied : Extra 5% Off with Your Order</div>
      </div>
      <input
        type="id"
        className={styles.inputField}
        placeholder="Card Number"
        required
      />
      <div className={styles.yearMnDiv}>
        <div>
          <input
            type="text"
            className={styles.expDate}
            placeholder="MM / YY"
            required
          />
        </div>
        <div className={styles.secDiv}>
          <div className={styles.cvvDiv}>
            <input
              type="password"
              className={styles.expDate}
              placeholder="CVV"
              required
            />
          </div>
          <div>
            <img
              src="https://mamaearthp.imgix.net/wysiwyg/creditCardImage.png?auto=format"
              className={styles.cvvImg}
              alt="mama"
            />
          </div>
        </div>
      </div>

      <div>
        <input
          type="text"
          placeholder="Name on the card"
          className={styles.inputField}
          required
        />
      </div>
      <button type="button" className={styles.cardBtn} onClick={showSuccess}>
        PLACE ORDER
      </button>
      <div className={styles.protect}>
        <div>
          <img
            src="https://mamaearthp.imgix.net/wysiwyg/noun_trusted_27146262x_6Ekja92.png?auto=format"
            alt="mama"
          />
        </div>
        <div>100% Payment Protection, Easy Return Policy</div>
      </div>
      <div className={styles.upiLogos}>
        <div>
          <img
            src="https://mamaearthp.imgix.net/wysiwyg/visa2x.png?auto=format"
            alt="mama"
          />
        </div>
        <div>
          <img
            src="https://mamaearthp.imgix.net/wysiwyg/master_card2x.png?auto=format"
            alt="mama"
          />
        </div>
        <div>
          <img
            src="https://mamaearthp.imgix.net/wysiwyg/american_express2x.png?auto=format"
            alt="mama"
          />
        </div>
        <div>
          <img
            src="https://mamaearthp.imgix.net/wysiwyg/rupay2x.png?auto=format"
            alt="mama"
          />
        </div>
        <div>
          <img
            src="https://mamaearthp.imgix.net/wysiwyg/net_banking2x.png?auto=format"
            alt="mama"
          />
        </div>
      </div>
    </div>
  );
};

export default Credit;
