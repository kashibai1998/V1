//Promise it will give two repsonse as resolve or reject

let promiseObj = new Promise((resolve, reject) => {
    let resturantStatus = 'open';

    if (resturantStatus === "open") {
        resolve("Resturant is opened");
    }
    else {
        reject("Resturant temporarily closed");
    }
})

//How to interact with promise
//.then() always run for resolve

promiseObj.then((msg) => {
    console.log("Note " + msg);
}).catch((errorMsg) => {
    console.log("Note " + errorMsg);
})

