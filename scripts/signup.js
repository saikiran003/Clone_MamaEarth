let mob = JSON.parse(localStorage.getItem('userMob'))


let fname = document.querySelector(".Bfname").innerText
// fname = fname.innerText
let lname = document.querySelector(".Blname").innerText
let Emale = document.querySelector(".Bmail").innerText
let gender = document.querySelectorAll(".Bgender")
let dob = document.querySelector(".Bdob").innerText


console.log(fname)
document.querySelector(".BsignupButton").addEventListener("click",(event)=>{

    fname = document.querySelector(".Bfname").innerText

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
    }else if(Emale==""){
        document.querySelector(".BmalE").innerHTML = `<p>Valid Email Id is Required</p>`
    }else if(gender.checked!=true){
        document.querySelector(".BgendeR").innerHTML = `<p></p>`
    }else{
        let obj={
            fname,
            lname,
            Emale,
            gender,
            dob,
            Mob:mob
        }
        localStorage.setItem('userData',JSON.stringify(obj))
        window.location.href="./otp.html"
    }
})

console.log('in')