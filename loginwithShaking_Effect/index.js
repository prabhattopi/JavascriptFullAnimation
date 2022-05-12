const form=document.querySelector("form"),
eField=form.querySelector(".email"),
eInput=eField.querySelector("input"),
pField=form.querySelector(".password"),
pInput=pField.querySelector("input")
form.onsubmit=(e)=>{
    e.preventDefault()
   if(eInput.value==""){
       eField.classList.add("shake","error")

   }
   else{
       check()
   }
   if(pInput.value==""){
       pField.classList.add("shake","error")

   }
   setTimeout(() => {
       eField.classList.remove("shake")
       pField.classList.remove("shake")
   }, 500);


   function check(){
    let pattern =/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!eInput.value.match(pattern)){
     
        let errortxt=eField.querySelector(".error-txt");
      (eInput.value !="") ? errortxt.innerText="Enter a valid Email" : errortxt.innerText="Email can't be blank"
      eField.classList.add("error")
    }
    else{
        eField.classList.remove("error")
    }
   }
   eInput.onkeyup= ()=>{
      check()
 


}
pInput.onkeyup= ()=>{
      

    if(!pInput.value==""){
        pField.classList.remove("error")
    }
    else{
        pField.classList.add("error")
    }


}
 
 


   
  if(!eField.classList.contains("error") && !pField.classList.contains("error")){
      window.location.href="#"
      console.log("Form Submiited")

  
  }

}


