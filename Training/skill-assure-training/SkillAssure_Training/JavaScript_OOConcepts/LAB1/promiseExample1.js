function checkResturant(restName) {
    return new Promise((resolve, reject) => {
        console.log(`Resturant name is ${restName}`)
        if (restName === "Dominos") {
            resolve("we will delivey to home");
        }
        else {
            reject("We will not delivey to home");
        }
    })
}


// function to check order status
function checkOrderStatus(status) {
    return new Promise((resolve, reject) => {
        console.log("Checking you order status");
        resolve(`Your Order getting ready. ${status}`)
    })
}


//interacting with promises

// checkResturant("Dominos").then((response) => {
//     console.log("Order Received by Resturant");
//     return checkOrderStatus(response);
// }).then((orderResponse) => {
//     console.log(orderResponse);
// })


//use Async and awit
async function checkCustomer() {
    try {
        const resturantResp = await checkResturant("MT");
        console.log("Order Received by Resturant");
        console.log(resturantResp);

        const orderRes = await checkOrderStatus(resturantResp);
        console.log(orderRes);
    }
    catch (error) {
        console.log(error);
    }

}
checkCustomer();