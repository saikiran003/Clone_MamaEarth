import React from "react";
import {Link} from "react-router-dom";
// import {styles} from "navbar.modules";

//     z-index: 1;
// visibility: hidden;
// transition: all 0.2s ease 0s;
// cursor: default;
// content: "";
// position: absolute;
// top: calc((100% + 1rem) - 2px);
// right: 50%;
// min-width: 150px;
// background: 0% 0% no-repeat padding-box padding-box rgb(255, 255, 255);
// box-shadow: rgb(0 0 0 / 26%) 0px 8px 16px;
// padding: 0px;
// border-top: 2px solid rgb(0, 175, 239);
// transform: translateX(50%);

const Header = () => {
  return (
    <div>
      <div >
    <nav  className="navbar navbar-expand-lg navbar-light bg-white">
      <div
        style={{
          marginLeft: "5.856515373352855vw",
          marginRight: "5.856515373352855vw",
        }}
        className="container-fluid"
      >
        <a className="navbar-brand" href="#">
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
            Seacrh
          </button>
        </form>

        <div className="collapse navbar-collapse" id="navbarSupportedContent"></div>

        <div style={{ marginRight: "1rem" }}>
          <ul className="navbar-nav mb-2 mb-lg-0 ">
            <li className="nav-item   ">
              <Link to="/cart"
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
            </li>

            <li  className="nav-item dropdown">
              <Link to="/login"
               style={{ fontsize: "0.0vh" }}
                className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded=""
                
              >
      
              

               <svg fill="none" height="22" width="22" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{display:'inline-block',verticalAlign:'middle', marginRight:"1rem"}} ><path style={{stroke: "#00afef",}} d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle style={{stroke: "#00afef",fontWeight:'300', }} cx="12" cy="7" r="4"></circle></svg>

               Login
             
              </Link>

              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>

    <div style={{backgroundColor:'white', borderTop: '1px solid whitesmoke'}} >
      <ul style={{fontSize:'2.13089802130898vh', fontWeight:'500', color:'gray', textDecoration:'none'}} className="nav justify-content-center">
        <li className="nav-item">
          <Link style={{color:'black', textDecoration:'none'}} className="nav-link active" aria-current="page" to="/">HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/baby">BABY</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/beauty">BEAUTY</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/hair">HAIR</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/face">FACE</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/body">BODY</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/giftpacks">GIFT PACKS</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/allproducts">ALL PRODUCTS</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/blog">BLOG</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/plantgoodness">PLANT GOODNESS</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="storelocator">STORE LOCATOR</Link>
        </li>
      </ul>
    </div>
    </div>
     
    
  );
};

export default Header;
