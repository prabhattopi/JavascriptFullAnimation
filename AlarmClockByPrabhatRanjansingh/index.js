const selectMenu=document.querySelectorAll("select"),
currentTime=document.querySelector("h1"),
setAlarm=document.querySelector("button"),
content=document.querySelector(".content")

let alarmtime,isAlarmset=false,
ringTone=new Audio("./files/ringtone.mp3")
for(let i=12;i>0;i--){
    i=i<10?"0" + i:i;
    let option=`<option value="${i}">${i}</option>`
   selectMenu[0].firstElementChild.insertAdjacentHTML("afterend",option)
}
for(let i=59;i>=0;i--){
    i=i<10?"0" + i:i;
    let option=`<option value="${i}">${i}</option>`
   selectMenu[1].firstElementChild.insertAdjacentHTML("afterend",option)
}
for(let i=2;i>0;i--){
  let ampm=i==1?"AM":"PM"
    let option=`<option value="${ampm}">${ampm}</option>`
   selectMenu[2].firstElementChild.insertAdjacentHTML("afterend",option)
}
setInterval(() => {
    let date=new Date()
    h=date.getHours()
    m=date.getMinutes()
    s=date.getSeconds()
    ampm="AM"
    if(h>=12){
        h=h-12
        ampm="PM"

    }
    h=h===0?h=12:h
    h=h<10?"0" + h:h;
    m=m<10?"0" + m:m;
    s=s<10?"0"+ s:s;
    
    currentTime.innerText=`${h}:${m}:${s} ${ampm}`
  if(alarmtime==`${h}:${m} ${ampm}`){

      ringTone.play()
      ringTone.loop=true
  }
}, 1000);
function setAlarmi(){
    if(isAlarmset){
        alarmtime="";
        ringTone.pause()
        content.classList.remove("disable")
        setAlarm.innerText="Set Alarm"
        return isAlarmset=false
    }

     
    let time=`${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`
    if(time.includes("Hour")||time.includes("Minute")||time.includes("AM/PM")){
      return alert("Please select valid time")
    }
    isAlarmset=true
  alarmtime=time
    content.classList.add("disable")
    setAlarm.innerText="Clear Alarm"
}




setAlarm.addEventListener("click",setAlarmi)