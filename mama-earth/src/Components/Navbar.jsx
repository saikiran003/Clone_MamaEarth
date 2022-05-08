import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, delItem } from "../redux/action";

// import { loadData } from "../utils/localStorage";
// import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cart);

  var total = 0;
  const openCart = () => {
    document.querySelector(".effort").style.display = "flex";
    // document.querySelector(".gavin").style.zIndex = "-1";
  };
  function closeCart() {
    document.querySelector(".effort").style.display = "none";
  }
  const checkOut = () => {
    console.log("yes");
  };
  const IncQuant = (item) => {
    dispatch(delItem(item));
  };
  const decQuant = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      <div className="echo">
        <div>
          <i>
            <svg
              id="shopping_cart_black_24dp"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              onClick={openCart}
            >
              <path
                id="Path_17357"
                data-name="Path 17357"
                d="M0,0H24V24H0Z"
                fill="none"
              ></path>
              <path
                id="Path_17358"
                data-name="Path 17358"
                d="M15.55,13a1.991,1.991,0,0,0,1.75-1.03l3.58-6.49A1,1,0,0,0,20.01,4H5.21L4.27,2H1V4H3l3.6,7.59L5.25,14.03A2,2,0,0,0,7,17H19V15H7l1.1-2ZM6.16,6H18.31l-2.76,5H8.53ZM7,18a2,2,0,1,0,2,2A2,2,0,0,0,7,18Zm10,0a2,2,0,1,0,2,2A2,2,0,0,0,17,18Z"
                fill="#00aeef"
              ></path>
            </svg>
          </i>
          <span className="educator">{state.length}</span>
        </div>
        <div>Cart</div>
      </div>

      {/* cart pop-up */}
      <div className="effort">
        <div className="faith" >
          <div className="fox" >
            <div className="fish" onClick={closeCart}>
            <i class="fa-solid fa-arrow-left"></i>
            </div>
            <div className="fin">My Cart</div>
           
          </div>
          {(state.length===0)?(
               <div id="myCartContent">
               <img src="https://mamaearthp.imgix.net/wysiwyg/bags2x.png?auto=format" alt="" />
               <h4>Your cart is empty !</h4>
               <p>It's a good day to buy the items you saved for later</p>
               <button id="shopNowBtn">SHOP NOW</button>
             </div>
          ):(<>
               <h6>Order Summary</h6>
          {state.map((item) => {
            total = total + Number(item.qty) * Number(item.price);
            return (
              <>
                <div className="follower">
                  <div>
                    <img src={item.pImg} alt={item.name} className="flock" />
                  </div>

                  <div>
                    <p className="hat" style={{ textAlign: "start" }}>
                      {item.name}
                    </p>
                    <div className="hall">
                      <div>₹{item.price}</div>
                      <div className="heat">
                        <button onClick={() => IncQuant(item)}>-</button>
                        <p>{item.qty}</p>
                        <button onClick={() => decQuant(item)}>+</button>
                      </div>
                    </div>
                  </div>
                </div>
                <hr style={{ marginTop: "-10px" }}></hr>
              </>
            );
          })}
          <div className="heaven">
            <img src="https://mamaearth.in/static/mamaearth/ruppee.svg"alt="rupee"/>
            <span class="savings">
              You save <span style={{color:"#59A30E"}}>₹{(0.05 * total).toFixed(2)}</span> on
              this order
            </span>
          </div>
          <h5>Price Summary</h5>
          <hr style={{ border: "0.0001px solid rgb(221, 216, 216)" }}></hr>
          <div className="hell">
            <div>Order Total</div>
            <div style={{ fontWeight: "700" }}>₹{total.toFixed(2)}</div>
          </div>
          <hr style={{ marginTop: "-10px" }}></hr>
          <div className="hell">
            <div>Shipping</div>
            <div style={{ color: "green", fontWeight: "500" }}>Free</div>
          </div>
          <hr style={{ marginTop: "-10px" }}></hr>
          <div className="hell">
            <div>5% online payment discount</div>
            <div style={{ color: "green", fontWeight: "500" }}>
              -₹{(0.05 * total).toFixed(2)}
            </div>
          </div>
          <hr style={{ marginTop: "-10px" }}></hr>
          <div className="hell" style={{ marginBottom: "60px" }}>
            <div>Grand Total</div>
            <div style={{ fontWeight: "700" }}>
              ₹{(total - (0.05 * total).toFixed(2)).toFixed(2)}
            </div>
          </div>
          <div class="footer__container">
            <div class="fine">
              <div class="fit">
                <div class="forest">
                  {" "}
                  ₹{(total - (0.05 * total).toFixed(2)).toFixed(2)}
                </div>
                <div class="fernando">View Details</div>
              </div>
              <button class="fakhris" onClick={checkOut}>
                Continue
              </button>
            </div>
          </div>
          </>)

          }
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
