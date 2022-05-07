import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [style, setStyle] = useState("cont");
  const [baby, setBaby] = useState(false);
  const [beauty, setBeauty] = useState(false);
  const [hair, setHair] = useState(false);
  const [face, setFace] = useState(false);
  const [body, setBody] = useState(false);
  const [isCart, setIsCart] = useState(false);
  const [underline, setUnderline] = useState("notUnderlined");

  const hoverUnderline = ()=>{
    setUnderline("underlined")
  }

  const handleBaby = () => {
    setBaby(true);
  };

  const handleBeauty = () => {
    setBeauty(true);
  };

  const handleHair = () => {
    setHair(true);
  };

  const handleFace = () => {
    setFace(true);
  };

  const handleBody = () => {
    setBody(true);
  };

  const showCart = (e) => {
    e.target.style.pointerEvents = 'none';
    setIsCart(true)

    console.log("clicked")

  }

  const toggleCart =() => {
    setIsCart(false);


  }

  const handleCss = (e) => {
   e.target.style.color = "#00afef";
    
    setStyle("cont2");
  };

  const handleLeave = (e) => {
    e.target.style.color = "black";
  };

  

  return (
    <div>

<div id="firstLine">
  <p className={underline} onMouseEnter={hoverUnderline} onMouseLeave={()=>{setUnderline("notUnderlined")}}>Asia's 1st Brand With MADE SAFE Certified Products</p>
  <p className={underline} onMouseEnter={hoverUnderline} onMouseLeave={()=>{setUnderline("notUnderlined")}}  >Free Shipping Above 399 | COD Available | Extra 5% Off On Prepaid Orders | Shop Now</p>
  <div> 
    <Link to="/">
                <svg
                      fill="none"
                      height="22"
                      width="22"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        display: "inline-block",
                        verticalAlign: "middle",
                        marginRight: "1rem",
                      }}
                    >
                      <path
                        style={{ stroke: "white" }}
                        d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                      ></path>
                      <circle
                        style={{ stroke: "white", fontWeight: "300" }}
                        cx="12"
                        cy="7"
                        r="4"
                      ></circle>
                    </svg>
                    </Link>
                    </div>
</div>

      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div
            style={{
              marginLeft: "5.856515373352855vw",
              marginRight: "5.856515373352855vw",
            }}
            className="container-fluid"
          >
            <a className="navbar-brand" href="/">
              <img
                style={{ width: "10.248901903367496vw", height: "" }}
                alt="mamaearth"
                className="logo"
                src="https://mamaearthp.imgix.net/wysiwyg/mamaearth-logo.png?auto=format&amp;fit=scale"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <form className="d-flex">
              <input
                style={{ width: "36.603221083455345vw", height: "" }}
                type="text"
                className="form-control"
                placeholder="Search for products"
                aria-label="Search for products"
                aria-describedby="button-addon2"
              />
              <button
                style={{
                  backgroundColor: "#00afef",
                  color: "white",
                  border: "none",
                }}
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                <svg
                  style={{ marginRight: "1rem", color: "white" }}
                  width="17.82"
                  height="16.834"
                  viewBox="0 0 17.82 16.834"
                >
                  <path
                    style={{ fill: "rgb(255, 255, 255)" }}
                    d="M0 6.318a6.282 6.282 0 003.744 5.652 7.006 7.006 0 007.025-.68l5.673 5.354a.871.871 0 001.133-.041.756.756 0 00.044-1.07l-5.673-5.354a6.022 6.022 0 00.219-7.469A6.894 6.894 0 004.676.29 6.354 6.354 0 000 6.318zM6.679 1.59a4.875 4.875 0 015.009 4.728 4.875 4.875 0 01-5.009 4.728A4.875 4.875 0 011.67 6.318 4.875 4.875 0 016.679 1.59z"
                    fill="#5c5c5c"
                    className="path-selector"
                  ></path>
                </svg>
                Search
              </button>
            </form>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            ></div>

            <div style={{ marginRight: "1rem" }}>
              <ul className="navbar-nav mb-2 mb-lg-0 ">
                <li onClick={showCart} className="nav-item">
                  <Link
                    to="/cart"
                    style={{ marginRight: "3rem" }}
                    className="nav-link active  .me-10 "
                    aria-current="page"
                  >
                    <svg
                      style={{ marginRight: "1rem", color: "white" }}
                      id="shopping_cart_black_24dp"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
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
                    Cart
                  </Link>
                  {
                    isCart&&(
                      <div id="cartAtRight">

                        <div id="myCart">
                          <div onClick={toggleCart}>
                            <i class="fa-solid fa-arrow-left"></i>
                          </div>
                          <div id="myCartSecond">
                            <p>My Cart</p>
                          </div>
                        </div>

                        <div id="myCartContent">
                          <img src="https://mamaearthp.imgix.net/wysiwyg/bags2x.png?auto=format" alt="" />
                          <h4>Your cart is empty !</h4>
                          <p>It's a good day to buy the items you saved for later</p>
                          <button id="shopNowBtn">SHOP NOW</button>
                        </div>


                      </div>
                    )
                  }
                </li>

                <li className="nav-item dropdown">
                  <Link
                    to="/login"
                    style={{ fontsize: "0.0vh" }}
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    
                  >
                    <svg
                      fill="none"
                      height="22"
                      width="22"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        display: "inline-block",
                        verticalAlign: "middle",
                        marginRight: "1rem",
                      }}
                    >
                      <path
                        style={{ stroke: "#00afef" }}
                        d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                      ></path>
                      <circle
                        style={{ stroke: "#00afef", fontWeight: "300" }}
                        cx="12"
                        cy="7"
                        r="4"
                      ></circle>
                    </svg>
                    Login
                  </Link>

                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link to="/login" className="dropdown-item" >
                      <svg
                      fill="none"
                      height="22"
                      width="22"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        display: "inline-block",
                        verticalAlign: "middle",
                        marginRight: "1rem",
                      }}
                    >
                      <path
                        style={{ stroke: "#00afef" }}
                        d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                      ></path>
                      <circle
                        style={{ stroke: "#00afef", fontWeight: "300" }}
                        cx="12"
                        cy="7"
                        r="4"
                      ></circle>
                    </svg>
                    Your Profile
                      </Link>
                    </li>

                    <li>
                      <hr className="dropdown-divider" />
                    </li>


                    <li>
                      <Link className="dropdown-item" to="/orders">
                      <svg
                      style={{ marginRight: "1rem", color: "white" }}
                      id="shopping_cart_black_24dp"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
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
                    </svg> Your Orders
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>


                    <li>
                      
                      <Link className="dropdown-item" to="/address">
                      <svg id="place_black_24dp" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs><style></style></defs><path id="Path_17353" data-name="Path 17353" d="M0,0H24V24H0Z" fill="none"></path><path id="Path_17354" data-name="Path 17354" d="M12,12a2,2,0,1,1,2-2A2.006,2.006,0,0,1,12,12Zm6-1.8a6,6,0,1,0-12,0c0,2.34,1.95,5.44,6,9.14C16.05,15.64,18,12.54,18,10.2ZM12,2a7.955,7.955,0,0,1,8,8.2q0,4.98-8,11.8Q4.005,15.175,4,10.2A7.955,7.955,0,0,1,12,2Z" fill="#00aeef"></path></svg>
                      Manage Address
                      </Link>
                    </li>

                    <li>
                      <hr className="dropdown-divider" />
                    </li>

                    <li>
                      <Link className="dropdown-item" to="/contactus">
                      <svg id="call_black_24dp" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path id="Path_17355" data-name="Path 17355" d="M0,0H24V24H0Z" fill="none"></path><path id="Path_17356" data-name="Path 17356" d="M6.54,5a12.312,12.312,0,0,0,.45,2.59l-1.2,1.2A14.826,14.826,0,0,1,5.03,5H6.54M16.4,17.02a12.753,12.753,0,0,0,2.6.45v1.49a15.426,15.426,0,0,1-3.8-.75l1.2-1.19M7.5,3H4A1,1,0,0,0,3,4,17,17,0,0,0,20,21a1,1,0,0,0,1-1V16.51a1,1,0,0,0-1-1,11.407,11.407,0,0,1-3.57-.57.839.839,0,0,0-.31-.05,1.024,1.024,0,0,0-.71.29l-2.2,2.2a15.149,15.149,0,0,1-6.59-6.59l2.2-2.2a1,1,0,0,0,.25-1.02A11.36,11.36,0,0,1,8.5,4,1,1,0,0,0,7.5,3Z" fill="#00aeef"></path></svg>
                      Contact Us
                      </Link>
                    </li>

                    <li>
                      <hr className="dropdown-divider" />
                    </li>

                    <button id="shopNowBtn">SHOP NOW</button>
                      

                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="belowNavbar" style={{}}>
        <ul
          style={{
            fontSize: "2.13089802130898vh",
            fontWeight: "500",
            color: "gray",
            textDecoration: "none",
          }}
          className="nav justify-content-center"
        >
          <li className="nav-item">
            <div className={style} onClick={handleCss}>
              <Link className="nav-link active" aria-current="page" to="/">
                HOME
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <div
              className={style}
              onClick={handleCss}
              onMouseOver={handleBaby}
              onMouseLeave={() => {
                setBaby(!baby);
              }}
            >
              <Link className="nav-link" to="/baby">
                BABY
              </Link>
            </div>
            {baby && (
              <div className="babyHover">
                <div className="babyFirst">
                  <p style={{ fontSize: "2.43531202435312vh", color: "black" }}>
                    Explore
                  </p>
                  <p>New Launches</p>
                  <p>Best Sellers</p>
                  <p>Combos</p>
                  <p>Gift Packs</p>
                </div>
                <div className="babySecond">
                  <p style={{ fontSize: "2.43531202435312vh", color: "black" }}>
                    Baby
                  </p>
                  <p>Baby Shampoo</p>
                  <p>Baby Oralcare</p>
                  <p>Baby Oil</p>
                  <p>Baby Skin</p>
                  <p>Baby Bath</p>
                </div>

                <div className="babyThird">
                  <p
                    style={{ fontSize: "2.43531202435312vh", color: "#00afef" }}
                  >
                    See All
                  </p>
                </div>
              </div>
            )}
          </li>

          <li className="nav-item">
            <div
              className={style}
              onClick={handleCss}
              onMouseOver={handleBeauty}
              onMouseLeave={() => {
                setBeauty(!beauty);
              }}
            >
              <Link className="nav-link" to="/beauty">
                BEAUTY
              </Link>
            </div>

            {beauty && (
              <div className="babyHover">
                <div className="babyFirst">
                  <p style={{ fontSize: "2.43531202435312vh", color: "black" }}>
                    Explore
                  </p>
                  <p>New Launches</p>
                  <p>Best Sellers</p>
                  <p>Combos</p>
                  <p>Gift Packs</p>
                </div>
                <div className="babySecond">
                  <p style={{ fontSize: "2.43531202435312vh", color: "black" }}>
                    Beauty
                  </p>
                  <p>Face </p>
                  <p>Hair </p>
                  <p>Body</p>
                </div>

                <div className="babyThird">
                  <p>See All</p>
                </div>
              </div>
            )}
          </li>
          <li className="nav-item">
            <div
              className={style}
              onClick={handleCss}
              onMouseOver={handleHair}
              onMouseLeave={() => {
                setHair(!hair);
              }}
            >
              <Link className="nav-link " to="/hair">
                HAIR
              </Link>
            </div>

            {hair && (
              <div className="babyHover">
                <div className="babyFirst">
                  <p style={{ fontSize: "2.43531202435312vh", color: "black" }}>
                    Explore
                  </p>
                  <p>New Launches</p>
                  <p>Best Sellers</p>
                  <p>Combos</p>
                  <p>Gift Packs</p>
                </div>
                <div className="babySecond">
                  <p style={{ fontSize: "2.43531202435312vh", color: "black" }}>
                    Hair
                  </p>
                  <p>Shampoo </p>
                  <p>Conditioner </p>
                  <p>Hair Oil</p>
                  <p>Hair Mask</p>
                  <p>Hair Serum</p>
                </div>

                <div className="babyThird">
                  <p>See All</p>
                </div>
              </div>
            )}
          </li>
          <li className="nav-item">
            <div
              className={style}
              onClick={handleCss}
              onMouseOver={handleFace}
              onMouseLeave={() => {
                setFace(!face);
              }}
            >
              <Link className="nav-link " to="/face">
                FACE
              </Link>
            </div>

            {face && (
              <div className="babyHover">
                <div className="babyFirst">
                  <p style={{ fontSize: "2.43531202435312vh", color: "black" }}>
                    Explore
                  </p>
                  <p>New Launches</p>
                  <p>Best Sellers</p>
                  <p>Combos</p>
                  <p>Gift Packs</p>
                </div>
                <div className="babySecond">
                  <p style={{ fontSize: "2.43531202435312vh", color: "black" }}>
                    Face
                  </p>
                  <p>Face Wash </p>
                  <p>Face Mask </p>
                  <p>Face Cream</p>
                  <p>Face Serum</p>
                  <p>Face Scrub</p>
                  <p>Face Toner</p>
                  <p>Face Gel</p>
                  <p>Face Sheet Mask</p>
                  <p>Face Moisturiser</p>
                </div>

                <div className="babyThird">
                  <p>See All</p>
                </div>
              </div>
            )}
          </li>
          <li className="nav-item">
            <div
              className={style}
              onClick={handleCss}
              onMouseOver={handleBody}
              onMouseLeave={() => {
                setBody(!body);
              }}
            >
              <Link className="nav-link " to="/body">
                BODY
              </Link>
            </div>

            {body && (
              <div className="babyHover">
                <div className="babyFirst">
                  <p style={{ fontSize: "2.43531202435312vh", color: "black" }}>
                    Explore
                  </p>
                  <p>New Launches</p>
                  <p>Best Sellers</p>
                  <p>Combos</p>
                  <p>Gift Packs</p>
                </div>
                <div className="babySecond">
                  <p style={{ fontSize: "2.43531202435312vh", color: "black" }}>
                    Body
                  </p>
                  <p>Body Wash </p>
                  <p>Body Scrub </p>
                  <p>Hand Cream</p>
                  <p>Body Lotion</p>
                </div>

                <div className="babyThird">
                  <p>See All</p>
                </div>
              </div>
            )}
          </li>
          <li className="nav-item">
            <div className={style} onClick={handleCss}>
              <Link className="nav-link " to="/giftpacks">
                GIFT PACKS
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <div className={style} onClick={handleCss}>
              <Link className="nav-link " to="/allproducts">
                ALL PRODUCTS
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <div className={style} onClick={handleCss}>
              <Link className="nav-link " to="/blog">
                BLOG
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <div className={style} onClick={handleCss}>
              <Link className="nav-link " to="/plantgoodness">
                PLANT GOODNESS
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <div
              className={style}
              onMouseOver={handleCss}
              onMouseLeave={handleLeave}
            >
              <Link className="nav-link " to="storelocator">
                STORE LOCATOR
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
