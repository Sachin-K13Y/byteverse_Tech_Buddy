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
    document.querySelector(".total").innerHTML=total;
    
    

})














// let amountArray=[];
// let remarkArray=[];
// let dateArrray=[];
// document.querySelector('.add')
// .addEventListener('click',fetchValue)

// let total=0;



// function fetchValue(){
//     if(sign==='+'){
//     let amount=parseInt(document.querySelector('#amount').value);
//     amountArray.push(amount)
//     }
//     else{
//         let amount=-parseInt(document.querySelector('#amount').value);
//         amountArray.push(amount)
//     }
    
//     let remark=document.querySelector('#remark').value
    
//     let date=document.querySelector('#date').value

  
//     remarkArray.push(remark);
//     dateArrray.push(date);




//     totalSum()
//     displayValue()
// }
// function totalSum(){
//     total+=amountArray[0];
// }




// function displayValue() {  
//     let data= document.querySelector('.right').lastElementChild.append(`<tr>
//     <td>${dateArrray[0]}</td>
//     <td>${remarkArray[0]}</td>
//     <td>${amountArray[0]}</td>
//     </tr>`)
    
//     // let data= document.querySelector('.right').innerHTML;
//     // console.log(data);
//     // data = data + `<tr>
//     // <td>${dateArrray[0]}</td>
//     // <td>${remarkArray[0]}</td>
//     // <td>${amountArray[0]}</td>
//     // </tr>`
//     document.querySelector('.right').innerHTML=data;
//   dateArrray.splice(0,1);
//   remarkArray.splice(0,1);
//   amountArray.splice(0,1);
  
  
// }

