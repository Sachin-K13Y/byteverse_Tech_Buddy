let toggleButton=document.querySelector(".toggle");
/* Toggle button to select the sign */


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

document.querySelector('.add').addEventListener('click',function () {
    let date = document.querySelector('#date').value;
    let remark = document.querySelector('#remark').value;
    let amount = parseInt( document.querySelector('#amount').value);
    let data = document.querySelector('table tbody').innerHTML;

    /* Storing the enterd details in data */

    data += `<tr>
     <td>${date}</td>
     <td>${remark}</td>
     <td>${sign}${amount}</td>
     </tr>`
    
    console.log(data);
    
    /* adding the details to table body */
    document.querySelector('table tbody').innerHTML=data;
let value = parseInt(sign + amount);
    

/*calculating the sum of the entered value*/
   total += value;
    document.querySelector(".total").innerHTML=total;
    
})
