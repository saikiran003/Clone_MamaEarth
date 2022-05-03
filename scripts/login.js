let mobileNumber = JSON.parse(localStorage.getItem('userMob')) || [];

let inpuT = document.querySelector(".ALoginInput");
let inputValue = inpuT.value + ""
console.log(typeof(inputValue))
console.log(inputValue.length)
let PopUp = document.querySelector(".Apopup")
const checkInput = ()=>{

    PopUp.innerHTML=""
    let inputValue = inpuT.value + ""
     if(inputValue.length==0){
         PopUp.innerHTML=(`<p>Required</p>`)
     }else if(inputValue.length<10 || inputValue.length>10){
        PopUp.innerHTML=(`<p>Add a 10 digit number</p>`)
     }else{
        document.querySelector(".AloginButton").addEventListener('click',()=>{
            PopUp.innerHTML=""
            let inputValue = inpuT.value + ""
            console.log(inputValue[0])
            
                 if(inputValue[0]<6){
                    PopUp.innerHTML=(`<p>Phone number is not valid</p>`)
                 }else{
                     window.location.href = "./signup.html"
                     localStorage.setItem('MoboileNumber',JSON.stringify(inputValue))
                 }
             
        })
     }
}






