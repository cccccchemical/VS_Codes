const {checkInventory, processPayment, shipOrder} = require('../library.js');

const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};

checkInventory(order)
.then((resolvedValueArray) => {
  // Write the correct return statement here:
  return processPayment(resolvedValueArray)
})
.then((resolvedValueArray) => {
  // Write the correct return statement here:
  return shipOrder(resolvedValueArray)
})
.then((successMessage) => {
  console.log(successMessage);
})
.catch((errorMessage) => {
  console.log(errorMessage);
});


let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('../library.js');

// Write your code below:


async function serveDinner() {
  const vegetablePromise = steamBroccoli();
  const starchPromise = cookRice();
  const proteinPromise = bakeChicken();
  const sidePromise = cookBeans();

  console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`)
}
serveDinner();
