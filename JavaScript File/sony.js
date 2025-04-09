// let args = [4, 5, 8, 9, 3, 6];
// function sum(...args)  {
//   return args.reduce((add, el) => (add+el));
// }

// function sum(...args) {
//   for(let i=0; i<args.length; i++) {
//     console.log("Gave you us: ", args[i]);
//   }
// }

// let form = document.querySelector("form");

// form.addEventListener("submit", function(event) {
//    event.preventDefault();
//    let inp = document.getElementById("user");
//    let pass = document.getElementById("pass");
//    console.dir(inp.value);
//    console.dir(pass.value);

// });

// let inp = document.querySelector("input");
// let para = document.querySelector("p");
// inp.addEventListener("input", function() {
// para.innerText = inp.value;
// })

// function saveDb(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;

//     if(internetSpeed > 4) {
//       resolve("Data Was saved, internet speed frequently");
//     }else {
//       reject("Connection occurred! week connection data was not saved");
//     }
//   });
// } 

// let request = saveDb("Prime minister");
// request.then((res) => {
//   console.log("data saved1: ");
//   console.log("result data saved: ", res);
//   return saveDb("Sony Shina");
// })
// .then((res)=> {
//   console.log("data saved2: ");
//   console.log("result data saved2:", res);
//   return saveDb("Sonypal Night");
// }) 
// .then((res)=> {
//   console.log("data saved3: ");
//   console.log("result data saved3: ", res);
// })
// .catch((err) => {
//   console.log("Promise was rejected");
//   console.log("error occred is: ", err);
// });


// function getDemo() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let num = Math.floor(Math.random() * 10) + 1;
//       console.log(num);
//       resolve()
//     }, 1000);
//   });
// }

// async function demo() {
//   await getDemo();
//   await getDemo();
//   await getDemo();
//   await getDemo();
//   await getDemo();
//   await getDemo();
//   await getDemo();
//   await getDemo();
//   await getDemo();
//   getDemo();
// }

let name = document.querySelector("h1");

function changeColor(color, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      name.style.color = color;
      console.log("Color design must be equal present in given title: ", color);
      resolve("Color was changed after given policy request");
    }, time);
  })
}

async function demo() {
await changeColor("red", 1000);
await changeColor("yellow", 1000);
await changeColor("pink", 1000);
await changeColor("brown", 1000);
await changeColor("blue", 1000);
await changeColor("orange", 1000);
changeColor("green", 1000);
}