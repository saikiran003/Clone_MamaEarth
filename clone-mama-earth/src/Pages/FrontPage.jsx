import React from "react";

import {
  Baby,
  Color,
  Launches,
  Onion,
  Slider,
  Summer,
  Tan,
  Vitamin,
} from "../Shubham Components/FrontPageProduct";
import YoutubeDiv from "../Shubham Components/YoutubeDiv";
import Standard from "../Shubham Components/Standard";
import KnowMoreImage from "../Shubham Components/KnowMoreImage";
import Customer from "../Shubham Components/Customer";
import { Crousel } from "../Shubham Components/Crousel";
import { Footer } from "../Bharan/Footer";

const Frontpage = () => {
  return (
    <div>
      <div>
        <Crousel />
      </div>
      <div 
        style={{
          height: "600px",
          width: "90%%",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "25% 75%",
          marginRight: "3%",
          marginTop: "3%",
        }}
      >
        <div 
          style={{
            margin: "auto",
            height: "250px",
            width: "300px",
            marginLeft: "30%",
            marginTop: "30%",
          }}
        >
          <h4 style={{ textAlign: "center" }}>Best Sellers</h4>
          <p style={{ textAlign: "center" }}>
            Explore best-selling safe, natural, and 100% toxin-free baby and
            beauty products from Mamaearth. Get amazing deals and start your
            toxin-free skin, hair, and baby care journey.
          </p>
          <button
            style={{
              backgroundColor: "rgb(0,149,203)",
              color: "white",
              height: "40px",
              width: "120px",
              marginLeft: "26%",
              border: "none",
              borderRadius: "5px",
            }}
          >
            View All
          </button>
        </div>
        <div
          style={{
            height: "700px",
            marginTop: "20%",
            width: "85%",
            margin: "auto",
            marginLeft: "10%",
          }}
        >
          <Slider />
        </div>
      </div>
      <div
        style={{
          height: "600px",
          width: "90%",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "25% 75%",
          marginRight: "3%",
          marginTop: "0%",
        }}
      >
        <div
          style={{
            margin: "auto",
            height: "250px",
            width: "300px",
            marginLeft: "25%",
            marginTop:"50%"
            
          }}
        >
          <h4 style={{ textAlign: "center" }}>Mamaearth Lightning Sale</h4>
          <p style={{ textAlign: "center" }}>
            Explore the goodness of nature from Mamaearth. Take a look at our
            lightning offers
          </p>
          <button
            style={{
              backgroundColor: "rgb(0,149,203)",
              color: "white",
              height: "40px",
              width: "120px",
              marginLeft: "26%",
              border: "none",
              borderRadius: "5px",
            }}
          >
            View All
          </button>
        </div>
        <div
          style={{
            height: "700px",
            // marginTop: "15%",
            width: "85%",
            margin: "auto",
            marginLeft: "10%",
          }}
        >
          <Slider />
        </div>
      </div>
      <div
        style={{
          height: "600px",
          width: "90%%",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "25% 75%",
          marginRight: "3%",
          marginTop: "0%",
        }}
      >
        <div
          style={{
            margin: "auto",
            height: "250px",
            width: "300px",
            marginLeft: "30%",
          }}
        >
          <h4 style={{ textAlign: "center" }}>Onion Range</h4>
          <p style={{ textAlign: "center" }}>
            Explore 100% toxin-free and safe Onion Range for Hair Fall,
            formulated with the goodness of natural ingredients and no harmful
            chemicals.
          </p>
          <button
            style={{
              backgroundColor: "rgb(0,149,203)",
              color: "white",
              height: "40px",
              width: "120px",
              marginLeft: "26%",
              border: "none",
              borderRadius: "5px",
            }}
          >
            View All
          </button>
        </div>
        <div
          style={{
            height: "700px",
            marginTop: "15%",
            width: "85%",
            margin: "auto",
            marginLeft: "10%",
          }}
        >
          <Vitamin />
        </div>
      </div>

      <div
        style={{
          height: "600px",
          width: "90%%",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "25% 75%",
          marginRight: "3%",
          
        }}
      >
        <div
          style={{
            margin: "auto",
            height: "250px",
            width: "300px",
            marginLeft: "30%",
          }}
        >
          <h4 style={{ textAlign: "center" }}>Vitamin C Range</h4>
          <p style={{ textAlign: "center" }}>
            Explore 100% toxin-free and safe Vitamin C Range for Glowing and
            Radiant Skin, formulated with the goodness of natural ingredients
            and no harmful chemicals
          </p>
          <button
            style={{
              backgroundColor: "rgb(0,149,203)",
              color: "white",
              height: "40px",
              width: "120px",
              marginLeft: "26%",
              border: "none",
              borderRadius: "5px",
            }}
          >
            View All
          </button>
        </div>
        <div
          style={{
            height: "700px",
            marginTop: "15%",
            width: "85%",
            margin: "auto",
            marginLeft: "10%",
          }}
        >
          <Onion />
        </div>
      </div>
      <div
        style={{
          height: "600px",
          width: "90%%",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "25% 75%",
          marginRight: "3%",
          
        }}
      >
        <div
          style={{
            margin: "auto",
            height: "250px",
            width: "300px",
            marginLeft: "30%",
          }}
        >
          <h4 style={{ textAlign: "center" }}>UbTan Range</h4>
          <p style={{ textAlign: "center" }}>
            Explore 100% toxin-free and safe Ubtan Range for Tan Removal and
            Radiant Skin, formulated with the goodness of natural ingredients
            and no harmful chemicals.
          </p>
          <button
            style={{
              backgroundColor: "rgb(0,149,203)",
              color: "white",
              height: "40px",
              width: "120px",
              marginLeft: "26%",
              border: "none",
              borderRadius: "5px",
            }}
          >
            View All
          </button>
        </div>
        <div
          style={{
            height: "700px",
            marginTop: "15%",
            width: "85%",
            margin: "auto",
            marginLeft: "10%",
          }}
        >
          <Tan />
        </div>
      </div>
      <div
        style={{
          height: "600px",
          width: "90%%",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "25% 75%",
          marginRight: "3%",
         
        }}
      >
        <div
          style={{
            margin: "auto",
            height: "250px",
            width: "300px",
            marginLeft: "30%",
          }}
        >
          <h4 style={{ textAlign: "center" }}>New Launches</h4>
          <p style={{ textAlign: "center" }}>
            Explore the goodness of nature from Mamaearth. Take a look at our
            newly launched toxin-free and natural products for hair, skin, and
            babies
          </p>
          <button
            style={{
              backgroundColor: "rgb(0,149,203)",
              color: "white",
              height: "40px",
              width: "120px",
              marginLeft: "26%",
              border: "none",
              borderRadius: "5px",
            }}
          >
            View All
          </button>
        </div>
        <div
          style={{
            height: "700px",
            marginTop: "15%",
            width: "85%",
            margin: "auto",
            marginLeft: "10%",
          }}
        >
          <Launches />
        </div>
      </div>

      <div
        style={{
          height: "600px",
          width: "90%%",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "25% 75%",
          marginRight: "3%",
         
        }}
      >
        <div
          style={{
            margin: "auto",
            height: "250px",
            width: "300px",
            marginLeft: "30%",
          }}
        >
          <h4 style={{ textAlign: "center" }}>Summer Products</h4>
          <p style={{ textAlign: "center" }}>
            Explore the goodness of nature from Mamaearth. Take a look at our
            toxin-free and natural products for hair, skin, and babies
          </p>
          <button
            style={{
              backgroundColor: "rgb(0,149,203)",
              color: "white",
              height: "40px",
              width: "120px",
              marginLeft: "26%",
              border: "none",
              borderRadius: "5px",
            }}
          >
            View All
          </button>
        </div>
        <div
          style={{
            height: "700px",
            marginTop: "15%",
            width: "85%",
            margin: "auto",
            marginLeft: "10%",
          }}
        >
          <Summer />
        </div>
        <div
          style={{
            height: "600px",
            width: "90%%",
            margin: "auto",
            display: "grid",
            gridTemplateColumns: "25% 75%",
            marginRight: "3%",
         
          }}
        >
          <div
            style={{
              margin: "auto",
              height: "250px",
              width: "300px",
              marginLeft: "30%",
            }}
          >
            <h4 style={{ textAlign: "center" }}>ColorCare</h4>
            <p style={{ textAlign: "center" }}>
              Color with care with our all-new colorcare range that’s 100%
              toxin-free and formulated with the goodness of natural
              ingredients. Check out our newly launched products & bring home
              your new favorites.
            </p>
            <button
              style={{
                backgroundColor: "rgb(0,149,203)",
                color: "white",
                height: "40px",
                width: "120px",
                marginLeft: "26%",
                border: "none",
                borderRadius: "5px",
              }}
            >
              View All
            </button>
          </div>
          <div
            style={{
              height: "700px",
              marginTop: "15%",
              width: "85%",
              margin: "auto",
              marginLeft: "10%",
            }}
          >
            <Color />
          </div>
        </div>
      </div>
      <div
        style={{
          height: "600px",
          width: "90%%",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "25% 75%",
          marginRight: "3%",
         
        }}
      >
        <div
          style={{
            margin: "auto",
            height: "250px",
            width: "300px",
            marginLeft: "30%",
          }}
        >
          <h4 style={{ textAlign: "center" }}>Baby Care</h4>
          <p style={{ textAlign: "center" }}>
            Your little bundle of joy deserves nothing but the best. Explore
            MadeSafe Certified, natural, 100% toxin-free & gentle baby care
            products by Mamaearth. Give your little one the care they deserve!
          </p>
          <button
            style={{
              backgroundColor: "rgb(0,149,203)",
              color: "white",
              height: "40px",
              width: "120px",
              marginLeft: "26%",
              border: "none",
              borderRadius: "5px",
            }}
          >
            View All
          </button>
        </div>
        <div
          style={{
            height: "700px",
            marginTop: "15%",
            width: "85%",
            margin: "auto",
            marginLeft: "10%",
          }}
        >
          <Baby />
        </div>
      </div>

      <div>
        <YoutubeDiv />
      </div>
      <div style={{ marginTop: "5%" }}>
        <KnowMoreImage />
      </div>
      <div style={{ marginTop: "10%" }}>
        <Standard />
      </div>
      <div style={{marginTop:"4%"}}>
        <Customer />
      </div>
      {/* <div>
        <Footer/>
      </div> */}
    </div>
    
  );
};

export default Frontpage;
