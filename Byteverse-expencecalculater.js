let toggleButton=document.querySelector(".toggle");
let sign=toggleButton.textContent;
toggleButton.addEventListener('click',function(){
    if(this.textContent==="+"){
        this.textContent="-";
        this.style.backgroundColor="red"
        sign='-'

    }
    else{
        this.textContent="+";
        this.style.backgroundColor="green"
        sign='+'
    }

})
let total = 0 ;
var limit=0;
document.querySelector('.addd').addEventListener('click',function () {
    limit= document.querySelector('#amount1').value;
})

document.querySelector('.add').addEventListener('click',function () {
    let date = document.querySelector('#date').value;
    let remark = document.querySelector('#remark').value;
    let amount = parseInt( document.querySelector('#amount').value);
    let data = document.querySelector('table tbody').innerHTML;
    data += `<tr>
     <td>${date}</td>
     <td>${remark}</td>
     <td>${sign}${amount}</td>
     </tr>`
    
    console.log(data);
    
    
    document.querySelector('table tbody').innerHTML=data;
let value = parseInt(sign + amount);
    
   total += value;
   limit= -limit;
    document.querySelector(".total").innerHTML=total;
    if (total>=limit) {
        alert("You Reached Your Limit")
    }
    console.log(total);
    console.log(limit);
    
    

})