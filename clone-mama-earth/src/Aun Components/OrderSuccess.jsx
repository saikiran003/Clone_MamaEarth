import React from "react";
import styles from "./Payment.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const OrderSuccess = ({ name, pin, city, state }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div id="container">
        <div>
          <img
            src="https://cdn.dribbble.com/users/147386/screenshots/5315437/media/64a3a80eb03d6fe459abd7e7c1d889f9.gif"
            alt="mama"
            className={styles.ordSucc}
          />
        </div>

        <h2 style={{ color: "red" }}>Payment Successful</h2>
        <h3>Thank you {name} for shopping with us .. !</h3>
        <h3>
          Your order will be delivered to {city} {pin} {state}
        </h3>
      </div>
      {/* <Link to="/credit">
        <button
          style={{ fontSize: "14px", background: "#7BCC70", border: "none", color: "white", padding: "10px" }}>

          Back to Home</button>
      </Link> */}
    </div>
  );
};

export default OrderSuccess;
