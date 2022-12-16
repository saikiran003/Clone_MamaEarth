import React from "react";
import "./Styles/Header.css";

const AddCart = () => {
  return (
    <div style={{ display: "flex" }}>
      <FontAwesomeIcon icon="fas fa-check-circle" className="right" />
      <p>Product has been added to cart</p>
    </div>
  );
};

export default AddCart;
