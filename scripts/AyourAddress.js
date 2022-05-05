let AddressArray = JSON.parse(localStorage.getItem('Address')) || [];
let cont = document.querySelector(".AaddressMainDiv")
  if(AddressArray.length==0){
    cont.innerHTML="";
    cont.innerHTML=
    `
        <div class="yourAddressMainDiv">
            <img class="AEmptyOrderList" src="https://mamaearth.in/static/mamaearth/location.svg" />
       </div>
       <div class="Anoorder">No Address Available</div>
      <div>
        <button class="AaddressButton" onclick="addressAdd()"> + ADD NEW ADDRESS </button>
      </div>
    `
  }

function addressAdd(){
    cont.innerHTML="";
    cont.innerHTML=
    `
    <div class="AmainHead">New Delivery Address</div>
    <div class="AddressFormdiv">
        <form class="AaddressForm">
            <div class="AinputDiv">
                <div>
                    <input type="text" placeholder="First Name*" class="Afname" value="" />
                </div>
                <div>
                     <input type="text" placeholder="Last Name*" class="Alname" value="" />
                </div>
            </div>
            <div class="AinputDiv">
                  <div>
                     <input type="email" placeholder="Email ID*" class="Aemail" value="" />
                  </div>
                  <div>
                     <input type="tel" placeholder="Phone Number*" maxlength="10" class="Aphone"  value="" />
                  </div>
            </div>
            <div class="AinputDiv3">
                  <div>
                     <input type="number" placeholder="PIN code*" maxlength="6" class="Apincode" >
                  </div>
                  <div>
                     <input type="text" placeholder="City*" class="Acity" value="" />
                  </div>
                  <div>
                     <input type="text" placeholder="State*" class="Astate" value="" />
                  </div>
             </div>

         <div>
             <input type="text" placeholder="Address (House Number, Building, Street, Area)*" class="Aaddress" value="" />
         </div>
         <div align="left">
             <p style="text-align: left;">Select the type of the Address</p>
             <div style="display: flex;">
                 <span class="Aselection">Home</span>
                 <span class="Aselection">Work</span>
                 <span class="Aselection">Other</span>
             </div>
         </div>
         <div class="Acheckboxdiv">
             <input type="checkbox" class="Acheckbox">
             <span>Make this as my default address</span>
         </div>
         <div class="AbuttonDiv">
             <button class="AsaveAddress" onclick="saveAddress()">SAVE ADDRESS</button>
             <button class="Acancel">Cancel</button>
         </div>
        </form>
    </div>
</div>
    `
  }






  let firstName = document.querySelector(".Afname").value
  let lastName = document.querySelector(".Alname").value
  let emeil = document.querySelector(".Aemail").value
  let phone = document.querySelector(".Aphone").value
  let pincode = document.querySelector(".Apincode").value
  let city = document.querySelector(".Acity").value
  let state = document.querySelector(".Astate").value
  let Address = document.querySelector(".Aaddress").value
  let defaultSet = document.querySelector(".Acheckbox")

function saveAddress(){
    
}