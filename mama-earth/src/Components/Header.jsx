import React,{useState} from "react";
import {Link} from "react-router-dom";
import "../styles/header.css"


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
        <p
          className={underline}
          onMouseEnter={hoverUnderline}
          onMouseLeave={() => {
            setUnderline("notUnderlined");
          }}
        >
          Asia's 1st Brand With MADE SAFE Certified Products
        </p>
        <p
          className={underline}
          onMouseEnter={hoverUnderline}
          onMouseLeave={() => {
            setUnderline("notUnderlined");
          }}
        >
          Free Shipping Above 399 | COD Available | Extra 5% Off On Prepaid
          Orders | Shop Now
        </p>
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

      <div style={{height:"60px",border:"1px solid red",display:"flex"}}>
      <a className="navbar-brand" href="#">
              <img
                style={{ width: "10.248901903367496vw", height: "" }}
                alt="mamaearth"
                className="logo"
                src="https://mamaearthp.imgix.net/wysiwyg/mamaearth-logo.png?auto=format&amp;fit=scale"
              />
            </a>
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

            

      </div>
    </div>
  );
};

export default Header;
