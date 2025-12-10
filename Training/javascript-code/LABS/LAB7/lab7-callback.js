//7. [CallBack] Use callback function to display the total amount after calculationg the total amount in a function.

//Step1: Get the price items using queryselector. Note the id of price span is 'price-item'.
//var priceItems = 
var priceItems = document.querySelectorAll('#price-item');
console.log(priceItems)
//Step2: Create 'priceDisplay' function to display the final amount in span 
//whose id is 'totalAmount'
priceDisplay = (some) =>{
    //Write code here
    document.getElementById('totalAmount').innerHTML=some;
}

//Step 3: Create a function 'priceCalculation' for calculating the total price. 

priceCalculation = (priceItems, myCallback) =>{
    var total = 0;
    for(var i=0; i<priceItems.length; i++){
        total += parseInt(priceItems[i].textContent);
    }

    //And the tip amount from id 'tipAmount' to the total. 
    total+=parseInt(document.getElementById('tipAmount').textContent)
    //Write code here

    //Use call Back functionality to pass the toatal amount.
    myCallback(total);
    //Write code here
}

//Step4: For above function pass the parameter 'priceItem' (from step1) and priceDisplay function created in step2.
//Write code here
priceCalculation(priceItems,priceDisplay);