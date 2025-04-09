//Asyncronus function:-
// async function greet() {
//   // abc.abc(); Error return function 
//   throw "404 page not found";
//    return "Hello India";
// }

// greet()
// .then((result) => {
//   console.log("Promise was resolved");
//   console.log("result was : ", result);
// })

// .catch((err) => {
//   console.log("Promise was rejected with err : ", err);
// });

// let demo = async() => {
//   return 5;
// };


// await keyword:-
// function getNum() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let num = Math.floor(Math.random() * 10) + 1;
//       console.log(num);
//       resolve();
//     }, 1000);
//   });
// }

// async function demo() {
//  await getNum();
//  await getNum();
//  await getNum();
//  await getNum();
//   getNum();
// }

//json.parse method:-
// let jsonRes =
//  '{"fact":"All cats have three sets of long hairs that are sensitive to pressure - whiskers, eyebrows,and the hairs between their paw pads.","length":128}';

//  let validRes = JSON.parse(jsonRes);
//  console.log(validRes);

// //  json stringify method:-
//  let Student = {
//   name : "Preetam Singh",
//   age : 20
//  };

//  let stringly = JSON.stringify(Student);
//  console.log(stringly);

let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res) => {
//   // console.log(res);
//   // console.log(res.json());
//   return  res.json();
// })
// .then((data) => {
//     console.log("data1 = ", data.fact);
//     return fetch(url);
//   })
//   .then((res) => {
//     return res.json();
//   })
// .then((data2) => {
//   console.log("data2 = ", data2.fact);
// })
// .catch((err) => {
//   console.log("Error-", err);
// }); 
//  console.log("I am happy");


// using await function:-
async function getFacts() {

  try {
   let res = await fetch(url);
  let data = await res.json();
  console.log("data1 ", data.fact); 

  let res1 = await fetch(url);
  let data1 = await res1.json();
  console.log("data2 ", data1.fact); 

  }  catch(e) {
    console.log("error - ", e);
  } 
  console.log("India");
}

console.log(getFacts());



 