// console.log("First");
// console.log("Second");
// console.log("Third");

// console.log("Start");
// setTimeout(() => {
//     console.log("This run after 5 seconds");
// }, 5000);
// console.log("End");

// setTimeout(() => {
//     console.log("Made Tea");
//     setTimeout(() => {
//         console.log("Toasted Bread");
//         setTimeout(() => {
//             console.log("Fried Egg");
//             setTimeout(() => {
//                 console.log("Served Breakfast");
//             }, 4000);
//         }, 3000);
//     }, 2000);
// }, 1000);

// // Promise Chain
// // Fullfilled - .then()
// // Rejected - .catch()

// let icecreamPromise = new Promise((resolve, reject) => {
//     let icecreamReady = false;
//     if(icecreamReady) {
//         resolve("Ice cream is ready");
//     }
//     else {
//         reject("No ice cream today");
//     }
// });
// icecreamPromise.then((message) => {
//     console.log("Yay! " + message);
// })
// .catch((message) => {
//     console.log("Oops! " + message);
// })

// let icecreamPromise = new Promise((resolve, reject) => {
//     let icecreamReady = false;
//     if (icecreamReady) {
//         resolve("Ice cream is ready");
//     } else {
//         reject("No ice cream today");
//     }
// });
// async function getIceCream() {
//     try {
//         let message = await icecreamPromise;
//         console.log(message);
//     }
//     catch (error) {
//         console.log(error);
//     }
// }
// getIceCream();