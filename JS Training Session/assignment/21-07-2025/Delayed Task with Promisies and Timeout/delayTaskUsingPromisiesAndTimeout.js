// Assignment 2: Delayed Task with Promises & Timeout
// Concepts: Promises, Async/Await, Date comparison, Debugging
"use strict";

function delayInDelivery(orderDeliveryTime) {
  return new Promise((resolve, reject) => {
    let now = new Date();
    let expectedTimeofRecivingOrder = new Date(orderDeliveryTime);

    const delay = expectedTimeofRecivingOrder - now;

    // Set timeout to delay task
    try {
      setTimeout(() => {
        const now = Date.now();
        const deliveryTime = new Date(now + 1800000);

        let message =
          "Pizaa At Your Door Step ! At: " + deliveryTime.toLocaleTimeString();
        resolve(message);
        document.getElementById("Answers_span").innerText = message;
      }, delay);
    } catch (error) {
      let message = "Your Order is Cancelled!";
      reject(message);
      document.getElementById("Answers_span").innerText = message;
    }
  });
}

async function getPizza() {
  try {
    let now = new Date();
    let orderDeliveryTime = new Date(now.getTime() + 5000).toISOString();

    const delay = await delayInDelivery(orderDeliveryTime);
    console.log(delay);
  } catch (error) {
    console.log(error);
  }
}

getPizza();
