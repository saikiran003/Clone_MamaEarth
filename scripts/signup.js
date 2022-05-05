let mob = JSON.parse(localStorage.getItem('mobRegistration'));
let ArryOfuserdata = JSON.parse(localStorage.getItem('userData')) || []
let mobbb = document.querySelector(".Bmob")
mobbb.value = mob



document.querySelector(".BsignupButton").addEventListener("click",(event)=>{

let fname = document.querySelector(".Bfname").value
let lname = document.querySelector(".Blname").value
let Email = document.querySelector(".Bmail").value
let gender = document.querySelectorAll(".Bgender")
let dob = document.querySelector(".Bdob").value
console.log(fname)

    document.querySelector(".BfnamE").innerHTML = "";
    document.querySelector(".BlnamE").innerHTML = "";
    // document.querySelector(".BmalE").innerHTML = "";

    event.preventDefault();
    console.log('inEventListner')
    if(fname==""){
        document.querySelector(".BfnamE").innerHTML = `<p>First name Required</p>`
    }else if(lname==""){
        console.log('lname')
        document.querySelector(".BlnamE").innerHTML = `<p>Last name Required</p>`
    }else if(Email==""){
        document.querySelector(".ABmaIL").innerHTML = `<p>Valid Email Id is Required</p>`
    }else{
        // console.log('storedata')
        if(gender[0].checked){
           Gender = 'Male'
        }else if(gender[1].checked){
            Gender = 'Female'
        }else if(gender[2].checked){
            Gender = 'Male'
        }else{
            Gender = 'Not Specified'
        }

        let obj={
            fname,
            lname,
            Email,
            Gender,
            dob,
            Mob:mob
        }
        ArryOfuserdata.push(obj)
        localStorage.setItem('userData',JSON.stringify(ArryOfuserdata));
        localStorage.setItem('triedToLoginUser',JSON.stringify(obj))
        window.location.href="./otp.html"
    }
})
