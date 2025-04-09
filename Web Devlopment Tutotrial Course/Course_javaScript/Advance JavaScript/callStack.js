// function hello() {
//   console.log("preetam Singh, Inside hello function");
//   console.log("Hello");
// }
// function demo() {
//   console.log("Inside in demo function");
//   hello();
// }

// console.log("calling demo fuction");
// demo();
// console.log("demo, bye");

// Visualiing the call stack
// function one() {
//   return 1;
// }
// function two() {
//   return one()+one();
// }
// function three() {
//   let ans = one()+two();
//   console.log(ans);
// }
// three();

// Js in single Thread
// setTimeout(() => {
//   console.log("Preetam Singh Rajput");
// }, 3000);

// setTimeout(() => {
//   console.log("Sanjay Singh Rajput");
// }, 2000);
// console.log("Hello World.");


// Callback Hell

// let h1 = document.querySelector("h1");

// setTimeout(() => {
//   h1.style.color = "red";
// }, 1000);

// setTimeout(() => {
//   h1.style.color = "green";
// }, 2000);

// setTimeout(() => {
//   h1.style.color = "blue";
// }, 3000);

//or

// function changeColor(color, delay) {
//   setTimeout(() => {
//       h1.style.color = color;
//   }, delay);
// }
// changeColor("red", 1000);
// changeColor("yellow", 2000);
// changeColor("green", 3000);

//or
// function changeColor(color, delay, nextColorChange) {
//   setTimeout(() => {
//       h1.style.color = color;
//       nextColorChange();
//   }, delay);
// }
// changeColor("red", 5000, () => {
//   changeColor("yellow", 5000, () => {
//     changeColor("blue",5000, () => {
//       changeColor("orange", 5000, () => {
//         changeColor("green", 2000);
//       });
//     });
//   });
// });


// // Promises:-
// function savatoDb(data, success, failure) {
//   let internetSpeed =  Math.floor(Math.random() * 10) + 1;
//   if(internetSpeed > 4) {
//     success();
//   }else{
//     failure();
//   }
// }

// savatoDb("Preetam Singh", () => {
//   console.log("success: successfully Saved.");
//   savatoDb("Sanjay Singh Rajput", () => {
//     console.log("Success2: Successfully Saved");
//   }, () => {
//     console.log("Failure2: weak connection");
//   });
// savatoDb("Banti Singh rajput", () => {
//   console.log("Success3: Successfully Saved");
// }, () => {
//   console.log("Failure3: weak connection.");
// })

// }, () => {
//   console.log("Finally Failure: Weak coonection");
// });

// Promise and rasolve:-
// function savetoDb(data) {
//   return new Promise((resolve, resurve) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed > 4) {
//        resolve("Success: Data was saved.");
//     } else{
//       resurve("Failure: Weak Connection.");
//     }
//     });
// }

// let request = savetoDb("Preetam Singh");
// request

// .then(() => {
//   console.log("Promise was resolved.");
//   console.log(request);
// })
// .catch(() => {
//   console.log("Promise was rejected.");
//   console.log(request);
// });

// //Improved version 
// savetoDb("Preetam Singh")

// .then((result) => {
//   console.log("data1 saved");
//   console.log("result of promise:", result);
//   return savetoDb("Data Scientist")
// })
// .then((result) => {
//   console.log("data2 saved");
//   console.log("result of promise:", result);
//   return savetoDb("Software Engineer");
// })
// .then((result)=> {
//   console.log("data3 saved");
//   console.log("result of promise:", result);
// })
// .catch((error) => {
//   console.log("Promise was rejected");
//   console.log("Error was promissed: ", error);
// });


// Apply promission:-
let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise( (resolve, reject) => {
         setTimeout(() => {
          let num = Math.floor(Math.random() * 5) + 1;
          if(num > 3) {
            reject("promise rejected.");
          }
        h1.style.color = color; 
        resolve("color changed");
    }, delay);
  });
  }

// Use of await function:-
async function demo() {
  try {
      await changeColor("red", 1000);
  await changeColor("gray", 1000);
  await changeColor("purple", 1000);
  await changeColor("orange", 1000);
  await changeColor("yellow", 1000);
  await changeColor("green", 1000);
}
  catch(err) {
     console.log("error caght");
     console.log(err);
  }
  let a = 5;
  console.log(a);
  console.log("new number = ", a+3);
  }


  // changeColor("red", 3000)
  // .then(() => {
  //   console.log("red color was completed");
  //   return changeColor("orange", 3000);
  // })
  // .then(()=> {
  //   console.log("orange color was completed");
  //   return changeColor("green", 3000);
  // })

  // .then(() =>{
  //   console.log("green color was completed");
  //   return changeColor("blue", 3000);
  // })

  // .then(() => {
  //   console.log("blue color was completed");
  //   return changeColor("purple", 3000);
  // })
  // .then(() => {
  //   console.log("Purple color was completed");
  // })
  // .catch((err) => {
  //   console.log("Error: ", err);
  // });