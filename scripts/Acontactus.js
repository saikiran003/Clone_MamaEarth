let outputForm = document.querySelectorAll(".contactForm input")
let popup = document.querySelectorAll('.Apopup')

Callfunction();
  popup[0].innerText="";
  popup[1].innerText=""
  popup[2].innerTextL=""
  popup[3].innerText=""
//   popup[0].innerHTML=""
  function Callfunction(){
      console.log('hg')
    if(outputForm[0].value==""){
        popup[0].innerText="Name Required"
    }else if(outputForm[1].value==""){
        popup[1].innerText="Email Required"
    }else if(outputForm[2].value==""){
        console.log('phone')
        popup[2].innerText="Required"
    }else if(document.querySelector("p+select>option")=="Select issue Type*"){
        popup[3].innerText="Required"
    }
  }

  function Asendmail(event){
      console.log(event)
    if(outputForm[0].value!="" && outputForm[1].value!="" && outputForm[2].value!="" && document.querySelector("p+select>option")!="Select issue Type*"){
            alert('Querry Registered Successfully.')
    }else{
        event.preventDefault(event)
        Callfunction()
    }
  }
