import React from "react";

import styles from "../pages/ProductImage.module.css";

// import { ImageData } from '../Datas/ImagesData'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import ImageSwipers from "./ImageSwipers";
import { ReadMoreReadLess } from "./ReadMoreReadLess";
const ProductDetails = () => {
  const updatedData = JSON.parse(localStorage.getItem("productdesp"));
  console.log(updatedData);

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  let x = randomNumber(5, 150);

  return (
    <div>
      <div className={styles.AddtocartContainer}>
        <div style={{ color: "#447d40", fontWeight: "bold" }}>
          <p>Price</p>
        </div>
        <div style={{ fontWeight: "bold" }}>
          <p>₹{updatedData.price}</p>
        </div>
        <div style={{ fontSize: "15px", color: "grey" }}>
          <p>Inclusive of all Taxes</p>
        </div>
        <div style={{ color: "red" }}>
          <p>Currently in {x} carts</p>
        </div>
        <div className={styles.AOT_productRR}>
          <div className={styles.AOT_productRating}>
            <div className={styles.AOT_productInnerRating1}>
              <p>★</p>
            </div>
            <div className={styles.AOT_productInnerRating2}>
              <p>{updatedData.rating}</p>
            </div>
          </div>
          <div className={styles.AOT_productReview}>
            <div className={styles.AOT_productInnerReview1}>
              <img
                src={"https://mamaearth.in/static/mamaearth/verified.svg"}
                alt=""
              />
            </div>
            <div className={styles.AOT_productInnerReview2}>
              <p>{updatedData.reviews} Verified Ratings</p>
            </div>
          </div>
        </div>
        <div>
          <label>Quantity</label>
          <div className={styles.ProductQntyUpdate}>
            <div>
              <p>-</p>
            </div>
            <div>
              <p>1</p>
            </div>
            <div>
              <p>+</p>
            </div>
          </div>
        </div>

        <div className={styles.addtocartBtn}>
          <button>
            <span>
              <i class="fas fa-cart-arrow-down"></i>
            </span>
            ADD TO CART
          </button>
        </div>
      </div>

      <div>
        <div className={styles.productDetails}>
          <div className={styles.pimages}>
            <div className={styles.pInnerImages}>
              <ImageSwipers />
            </div>
          </div>
          <div className={styles.pdetails}>
            <h3
              style={{
                textAlign: "justify",
                fontWeight: "300",
                fontSize: "26px",
              }}
            >
              {updatedData.name}
            </h3>
            <p style={{ textAlign: "left", fontSize: "20px" }}>
              {updatedData.pShortDec}
            </p>
            <div style={{ display: "flex", gap: "3px" }}>
              <p>{updatedData.ratings}</p>
              <p></p>
              <p>{`${updatedData.reviews} Verified Rating`}</p>
            </div>
            <p
              style={{
                textAlign: "left",
                color: "#81c340",
                fontWeight: "600",
                fontSize: "18px",
                marginBottom: "0.5%",
              }}
            >
              price
            </p>
            <p
              style={{ textAlign: "left", fontWeight: "600", fontSize: "18px" }}
            >
              ₹ {updatedData.price}
            </p>
            <p
              style={{
                textAlign: "left",
                fontWeight: "600",
                fontSize: "18px",
                fontWeight: "normal",
                fontSize: "15px",
              }}
            >
              Inclusive of all Taxes
            </p>
            <p style={{ textAlign: "left", color: "red" }}>
              Currently in {x} Carts
            </p>
            <img
              src="https://mamaearthp.imgix.net/wysiwyg/goodness-icons.png"
              height="50px"
              width="250px"
              style={{ marginLeft: "0", marginTop: "1%" }}
            />
          </div>
        </div>
      </div>

      <div style={{ height: "auto" }} className={styles.description}>
        <div>
          <h3 style={{ textAlign: "left", fontSize: "26px", marginTop: "5%" }}>
            Product Description
          </h3>
        </div>
        <p style={{ textAlign: "left" }}>
          <ReadMoreReadLess>{updatedData.description}</ReadMoreReadLess>
        </p>
      </div>

      <div
        style={{ width: "70%", height: "auto" }}
        className={styles.productDespDetails}
      >
        <h1 style={{ textAlign: "left", fontSize: "25px" }}>
          What Are The Benefits Of Mamaearth Onion Hair Oil?
        </h1>

        <div className={styles.categoryImages}>
          <div className={styles.DespCategory1}>
            <img
              src={updatedData.dImg1}
              height="190px"
              width="190px"
              style={{ borderRadius: "10px" }}
            />
            <p style={{ fontSize: "16px", color: "#81c340" }}>
              {updatedData.dtitle1}
            </p>
            <p
              style={{
                textAlign: "justify",
                marginLeft: "10px",
                fontWeight: "350",
              }}
            >
              {updatedData.dDec1}
            </p>
          </div>
          <div className={styles.DespCategory2}>
            <img
              src={updatedData.dImg2}
              height="190px"
              width="190px"
              style={{ borderRadius: "10px" }}
            />
            <p style={{ fontSize: "16px", color: "#81c340" }}>
              {updatedData.dtitle12}
            </p>
            <p
              style={{
                textAlign: "justify",
                marginLeft: "10px",
                fontWeight: "350",
              }}
            >
              {updatedData.dDec2}
            </p>
          </div>
          <div className={styles.DespCategory3}>
            <img
              src={updatedData.dImg3}
              height="190px"
              width="190px"
              style={{ borderRadius: "10px" }}
            />
            <p style={{ fontSize: "16px", color: "#81c340" }}>
              {updatedData.dtitle13}
            </p>
            <p
              style={{
                textAlign: "justify",
                marginLeft: "10px",
                fontWeight: "350",
              }}
            >
              {updatedData.dDec3}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
