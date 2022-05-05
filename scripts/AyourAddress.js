let AddressArray = JSON.parse(localStorage.getItem('Address')) || [];
let cont = document.querySelector(".AaddressMainDiv")
  if(AddressArray.length==0){
      document.querySelector(".showAddress").style.display="none"
       document.querySelector("#AaddressForm").style.display="none"
    //   document.querySelector("#AaddressForm").style.display="none"
  }else{
    document.querySelector(".showAddress").style.display="block"
    document.querySelector("#Anoaddress").style.display="none"
    document.querySelector("#AaddressForm").style.display="none"
  
  }

function AddAddress(){
    document.querySelector(".showAddress").style.display="none"
    document.querySelector("#Anoaddress").style.display="none"
    document.querySelector("#AaddressForm").style.display="block"
}






function saveAddress(event){

    let firstName = document.querySelector(".Afname").value
    let lastName = document.querySelector(".Alname").value
    let email = document.querySelector(".Aemail").value
    let phone = document.querySelector(".Aphone").value
    let pincode = document.querySelector(".Apincode").value
    let city = document.querySelector(".Acity").value
    let state = document.querySelector(".Astate").value
    let Address = document.querySelector(".Aaddress").value
    let defaultSet = document.querySelector(".Acheckbox").value
    if(firstName==""){
        alert('First name required')
        event.preventDefault(event)
    }else if(lastName==""){
        alert('Last name required')
    }else if(email ==""){
        alert('Valid email ID required')
    }else if(phone==""){
         alert('Valid phone number required')
    }else if(pincode==""){
        alert('Enter valid PIN Code')   
    }else if(city==""){
        alert('Required')
    }else if(state==""){
        alert('Valid phone number required')
    }else if(Address==""){
        alert('Address required')
    }else{
            
        let obj={
            firstName,
            lastName,
            email ,
            phone,
            pincode,
            city,
            state,
            Address,
        }
        if(defaultSet.checked){
            AddressArray.unshift(obj)
        }else{
            AddressArray.push(obj)
        }
    
        localStorage.setItem('Address',JSON.stringify(AddressArray));
        document.querySelector(".showAddress").style.display="block"
        document.querySelector("#Anoaddress").style.display="none"
        document.querySelector("#AaddressForm").style.display="none"
    } 
}


showAddressFunction(AddressArray)

function showAddressFunction(AddressArray){
    AddressArray.map((elem,AddressArray)=>{
        // console.log('map')
        document.querySelector('.showAddress').innerHTML=
        `
        <div class="AnoOfAddress">${AddressArray.length}</div>
        <div class="AaddressContainer">
            <h4 class="Aname">${elem.firstName} ${elem.lastName}</h4>
            <p class="AddressCont">${elem.Address} ${elem.city} ${elem.state}-${elem.pincode}</p>
            <h4 class="Amobb">${elem.phone}</h4>
        </div>
        `
    })


    let btn = document.createElement('div')
    btn.innerHTML=`
    <button class="AaddressButton" style=" min-width:110px;margin-bottom:20px" onclick="AddAddress()  "> + ADD NEW ADDRESS </button>
    `
    document.querySelector(".AnoOfAddress").innerText=AddressArray.length + " "+"Saved Address"
    document.querySelector(".showAddress").append(btn)
}



