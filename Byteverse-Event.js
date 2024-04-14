const now = new Date();
const year =now.getFullYear();
const month =now.getMonth();
const day = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
const customDate= new Date(2024,3,14,12,30,0);
customDate.setHours(customDate.getHours()+1);
const mydate=`${year}-${month+1}-${day} ${hours}:${seconds}`
document.body.querySelectorAll('.time').forEach((e)=>{
    e.innerHTML=mydate;
})