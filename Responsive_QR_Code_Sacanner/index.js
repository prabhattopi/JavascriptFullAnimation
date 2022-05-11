const wrapper=document.querySelector(".wrapper"),
form=wrapper.querySelector("form"),
fileInp=form.querySelector("input"),
infoText=form.querySelector("p"),
copyBtn=wrapper.querySelector(".copy"),
closeBtn=wrapper.querySelector(".close");

function fetchRequest(formData,file){
    infoText.innerText="Scannnig QR Code......."
    fetch(`https://api.qrserver.com/v1/read-qr-code/`,{
        method:"POST",body:formData

       
    }).then(res=>res.json()).then(data=>{
         data=data[0].symbol[0].data;
         console.log(data)
         infoText.innerText= data ? "Upload QR Code to Scan" : "Couldn't Scan QR code"
         if(!data) return;
         wrapper.querySelector("textarea").innerText=data
         form.querySelector("img").src=URL.createObjectURL(file)
        wrapper.classList.add("active")

        // console.log(data)
    }).catch(()=>{
        infoText.innerText="Couldn't Scan QR Code"
    })
}




fileInp.addEventListener("change",e=>{
    let file=e.target.files[0];//getting user Selected files
    if(!file) return;
    let formData=new FormData(); //creating a new formData object
    formData.append("file",file);//adding selected file to FormData
    fetchRequest(formData,file)

    // console.log(file);

});
copyBtn.addEventListener('click',()=>{
    let text=wrapper.querySelector("textarea").textContent
    navigator.clipboard.writeText(text)

})
closeBtn.addEventListener("click",()=>{
  wrapper.classList.remove("active")
})
form.addEventListener("click",()=>fileInp.click());
