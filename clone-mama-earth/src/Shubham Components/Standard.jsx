import React from "react";

const Standard = () => {
  return (
    <div>
      <div style={{marginBottom:'5%'}}>
        <h2 style={{ textAlign: "center" }}>Super Safe Standards</h2>
      </div>

      <div style={{ width: "90%", margin: "auto", display: "flex",gap:"5%"}}>
        <div style={{ display: "flex" }}>
          <div style={{ marginLeft: "7%"}}>
            <img src="https://mamaearthp.imgix.net/wysiwyg/dermatology-tested-100x100.png?auto=format&fit=100%2C100&ssl=1" width="70px" height="70px" alt="mama" />
          </div>
          <div>
            <h3>Dermatology Test</h3>
            <p>
              We ensu each product is tested clinically on the sensitive human
              skin to ensu that it is not allergic.
            </p>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ marginLeft: "7%"}}>
            <img src="https://mamaearthp.imgix.net/wysiwyg/fda-100x100.jpg?auto=format&fit=100%2C100&ssl=1" width="70px" height="70px" alt="products"/>
          </div>
          <div>
            <h3>FDA Approved</h3>
            <p>
            MamaEarth is FDA approved, which means we are 100% safe to be used for babies as well as mamas.
            </p>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ marginLeft: "7%"}}>
            <img src="https://mamaearthp.imgix.net/wysiwyg/msafe-100x100.jpg?auto=format&fit=100%2C100&ssl=1" width="70px" height="70px" alt="mama-earth"/>
          </div>
          <div>
            <h3>Made Safe Certified</h3>
            <p>
            The MADE SAFE (Made with Safe Ingredients™) seal means that a product is literally made with safe ingredients.
            </p>
          </div>
        </div>
       
        
      </div>
    </div>
  );
};

export default Standard;
