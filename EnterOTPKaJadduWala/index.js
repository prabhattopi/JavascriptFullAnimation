const input=document.querySelectorAll(".otp-box input")
input.forEach((e,i)=>{
    e.dataset.i=i
      e.addEventListener("keyup",handleotp)
    e.addEventListener("paste",handleotppaste)
  



})
function handleotp(e){
    const inp=e.target
    let value=inp.value
    inp.value=""
    inp.value=value?value[0]:"";
    let fieldIndex=inp.dataset.i;
    if(value.length>0&&fieldIndex<input.length-1){
        inp.nextElementSibling.focus()
    }
    if(e.key==="Backspace" && fieldIndex>0){
        inp.previousElementSibling.focus()
    }
  
    if(fieldIndex==input.length-1){
       
            submit()
       
        
    }


}
function handleotppaste(e){
const data=e.clipboardData.getData("text")
const value=data.split("")
if(value.length===input.length){
    input.forEach((e,i)=>(e.value=value[i]))
    submit()
}
}

function submit(){
    console.log("Submitting....")
    let otp="";
    input.forEach(e=>{
        otp+= e.value
        setTimeout(() => {
            e.disabled=true
        }, 1000);
 
        e.classList.add("disabled")
    })
    console.log(otp)
}
