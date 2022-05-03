let mobileNumber = JSON.parse(localStorage.getItem('userData'))

let inpuT = document.querySelector(".ALoginInput");
let inputValue = inpuT.value + ""

let PopUp = document.querySelector(".Apopup")

const checkInput = ()=>{

    PopUp.innerHTML=""
    let inputValue = inpuT.value + ""
     if(inputValue.length==0){
         PopUp.innerHTML=(`<p>Required</p>`)
     }else if(inputValue.length<10 || inputValue.length>10){
        PopUp.innerHTML=(`<p>Add a 10 digit number</p>`)
     }else{
        localStorage.setItem('mobRegistration',(inputValue))
        document.querySelector(".AloginButton").addEventListener('click',()=>{
            PopUp.innerHTML=""
            let inputValue = inpuT.value + ""
         
                 if(inputValue[0]<6){
                    PopUp.innerHTML=(`<p>Phone number is not valid</p>`)
                 }else{
                    var flag = true
                    mobileNumber.map((elem)=>{
                        if(elem.Mob==inputValue){
                             flag = false
                            window.location.href="./otp.html"
                        }
                   
                       
                    })
                 }if(flag==true){
                     window.location.href="./signup.html"
                 }
             
        })
     }
}






