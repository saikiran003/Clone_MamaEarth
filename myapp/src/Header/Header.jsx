import React from "react";

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
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div style={{marginLeft:'5.856515373352855vw', marginRight:'5.856515373352855vw'}} class="container-fluid">
        <a class="navbar-brand" href="#">
        <img style={{width: '10.248901903367496vw', height: ''}} alt="mamaearth" class="logo" src="https://mamaearthp.imgix.net/wysiwyg/mamaearth-logo.png?auto=format&amp;fit=scale" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <form class="d-flex">
            <input style={{width: '36.603221083455345vw', height: ''}}
              type="text"
              class="form-control"
              placeholder="Search for products"
              aria-label="Search for products"
              aria-describedby="button-addon2"
            />
            <button style={{backgroundColor:'#00afef', color:'white', border:'none'}}
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              <svg style={{marginRight:'1rem', color:'white'}}  width="17.82" height="16.834" viewBox="0 0 17.82 16.834"><path style={{fill: 'rgb(255, 255, 255)'}} d="M0 6.318a6.282 6.282 0 003.744 5.652 7.006 7.006 0 007.025-.68l5.673 5.354a.871.871 0 001.133-.041.756.756 0 00.044-1.07l-5.673-5.354a6.022 6.022 0 00.219-7.469A6.894 6.894 0 004.676.29 6.354 6.354 0 000 6.318zM6.679 1.59a4.875 4.875 0 015.009 4.728 4.875 4.875 0 01-5.009 4.728A4.875 4.875 0 011.67 6.318 4.875 4.875 0 016.679 1.59z" fill="#5c5c5c" class="path-selector"></path></svg>
              Seacrh
            </button>
          </form>


        <div class="collapse navbar-collapse" id="navbarSupportedContent">
         
         
        </div>

        <div style={{marginRight:"1rem"}}>
        <ul class="navbar-nav mb-2 mb-lg-0 ">
            <li class="nav-item   ">
              <a style={{marginRight:"3rem"}} class="nav-link active  .me-10 " aria-current="page" href="#">
              <svg style={{marginRight:'1rem', color:'white'}} id="shopping_cart_black_24dp" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path id="Path_17357" data-name="Path 17357" d="M0,0H24V24H0Z" fill="none"></path><path id="Path_17358" data-name="Path 17358" d="M15.55,13a1.991,1.991,0,0,0,1.75-1.03l3.58-6.49A1,1,0,0,0,20.01,4H5.21L4.27,2H1V4H3l3.6,7.59L5.25,14.03A2,2,0,0,0,7,17H19V15H7l1.1-2ZM6.16,6H18.31l-2.76,5H8.53ZM7,18a2,2,0,1,0,2,2A2,2,0,0,0,7,18Zm10,0a2,2,0,1,0,2,2A2,2,0,0,0,17,18Z" fill="#00aeef"></path></svg>
              Cart
              </a>
            </li>
            
            <li  class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                  

<svg style={{fontsize: "2vh"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path style={{fill: '#00afef', stroke:'#00afef', fontSize:''}} d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"/></svg>


              </a>
              
              <ul  class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
           
          </ul>



          
          </div>


      </div>
    </nav>
  );
};

export default Header;
