let elem = JSON.parse(localStorage.getItem('ActiveUser'))
let mob = JSON.parse(localStorage.getItem('mobRegistration'))

if(elem.Gender=='Female'){
    document.querySelector(".AprofileImg").innerHTML=`<img src="https://mamaearthp.imgix.net/wysiwyg/female.png?auto=format" />`
}else{
    document.querySelector(".AprofileImg").innerHTML=`<img src="https://mamaearthp.imgix.net/wysiwyg/male.png?auto=format" />`
}


           
            document.querySelector(".AprofileDetails").innerHTML=`
            <h3>${elem.fname} ${elem.lname}</h3>
            <span>Email: ${elem.Email}</span>
            <span>Mobile: ${elem.Mob}</span>
            <span>Gender: ${elem.Gender}</span>
            <span>DOB: ${elem.dob}</span>
            `


