//6. [Function Closure] Use closure property to increase or decrease the amount of Tip.

//Step-1: Use function closure property to hide the function of 
//inrement and decrement and display the new value of tip amount. 

var tipAmount = document.getElementById('tipAmount');

console.log(tipAmount.textContent)
var counter=parseInt(tipAmount.textContent)

var add =  ()=> {
    //Write code here
    // return function(){
        counter=counter+1;
        return counter;
    // }   
};

var subtract = ()=> {
    //Write code here
    // return function(){
        counter=counter-1;
        return counter;
    // }
}

 addTip=()=>{
    tipAmount.innerHTML = add();
}

//Create subtract() closure function to decrement the tip amount
//Write code here

  
 subtractTip=()=>{
    tipAmount.innerHTML = subtract();
}
