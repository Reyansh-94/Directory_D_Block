// let btn = document.querySelector("button");

// console.dir(btn);

// btn.onclick = function()  {
//   // console.log("Clicked button.");
//   alert("Hi say you what say want you!");
// };

// or
// function sayHello() {
//   alert("Hello");
// }

// btn.onclick = sayHello;

// onmouseenter function


// console.log(btns);

// for(let btn of btns) {
//     btn.onclick = sayHello;
//     btn.onmouseenter = function() {
//          console.log("You entered a button");
//     };
//     console.dir(btn);
// }

// add Event Listner Method
// let btns = document.querySelectorAll("button");

// for(let btn of btns) {
//  // btn.addEventListener("click", sayName);

//   btn.addEventListener("dblclick", function() {
//        console.log("Double Clicked.")
//   })
// }

// function sayHello() {
//   alert("Hello");
// }

// function sayName() {
//   alert("Preetam Singh");
// }

// let btn = document.querySelector("button");
// btn.addEventListener("click", function() {
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;
       
//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;
//     console.log("color updated");
// });



// function getRandomColor() {
//   let red = Math.floor(Math.random() * 255);
//   let green = Math.floor(Math.random() * 255);
//   let blue = Math.floor(Math.random() * 255);

//   let color = `rgb(${red}, ${green}, ${blue})`;
//   return color;
// }


// Event Listners method
// let p = document.querySelector("p");
// p.addEventListener("click", function() {
//      console.log("paragraph was clicked");
// });

// let div = document.querySelector(".box");
// div.addEventListener("mouseenter", function() {
//   console.log("mouse inside the box");
// });

// this function:


// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");

// btn.addEventListener("click", function() {
//   // console.log(this);
// //  console.dir(this);
//  console.dir(this.innerText);
//  this.style.backgroundColor = "blue";
// });

// p.addEventListener("click", function() {
//   console.dir(this.innerText);
//   this.style.backgroundColor = "blue";
//  });

//  h1.addEventListener("click", function() {
//   console.dir(this.innerText);
//   this.style.backgroundColor = "blue";
//  });

//  h3.addEventListener("click", function() {
//   console.dir(this.innerText);
//   this.style.backgroundColor = "blue";
//  });

// or
// function changeColor() {
//   console.dir(this.innerText);
//   this.style.backgroundColor = "blue";
// }

// h1.addEventListener("click", changeColor);
// h3.addEventListener("click", changeColor);
// p.addEventListener("click", changeColor);
// btn.addEventListener("click", changeColor);

// Event keyword
// let btn = document.querySelector("button");
// let inp = document.querySelector("input");

// inp.addEventListener("keyup", function(event) {
//   console.log("key = ", event.key);
//   console.log("code = ", event.code);
//   console.log("keyCode = ", event.keyCode);
//   console.log("key was Pressed");
//   console.log(event);
// });


// or function 
// let inp = document.querySelector("input");
// inp.addEventListener("keydown", function(event) {
//   console.log("code = ", event.code);
//   if(event.code == "ArrowUp") {
//     console.log("character forward");
//   }

//   else if(event.code == "ArrowLeft") {
//     console.log("Character move left");
//   }
//   else if(event.code == "ArrowRight") {
//     console.log("Charactr move Right");
//   }  
//   else if(event.code = "ArrowDown") {
//     console.log("character downward");
//   }
// });

// Form Event:-
// let func = document.querySelector("form");

// func.addEventListener("submit", function(event) {
//   event.preventDefault();
//   console.log("Form Submited")
// });

//Extracting Form Data:-
// let func = document.querySelector("form");

// func.addEventListener("submit", function(event) {
//   event.preventDefault();
  // let inp = document.querySelector("input");
  // console.dir(inp);
  // console.log(inp.value);
  // console.log("Form Submited");
  
  // let user = document.querySelector("#user");
  // let pass = document.querySelector("#pass");

  // or
  // let user = this.elements[0];
  // let pass = this.elements[1];

  // console.log("Username: ", user.value);
  // console.log("Password: ", pass.value);
  // alert(`Hi ${user.value}, your password is set to ${pass.value}`);
// });

// let user = document.querySelector("#user");

// user.addEventListener("change", function() {
//   console.log("Changed Event");
//   console.log("Final value = ", this.value);
// });
// user.addEventListener("input", function() {
//   console.log("Input event");
//   console.log("Final value = ", this.value);
// });

// access value and store it in paragraph
// let text = document.querySelector("#text");
// let p = document.querySelector("p");

// text.addEventListener("input", function() {
 
// console.log(text.value);
// p.innerText = text.value;  
// })


// Assignment
//  let btn = document.querySelector("button");

//  btn.addEventListener("mouseout", function() {
//   console.log("Pointer Arrow Mouse out");
//  });

// let user = document.querySelector("input");
// user.addEventListener("keypress", function(event) {
//   console.log("key = ", event.key)
//   console.log("key was Pressed");
//  });

// const element = document.querySelector("div#scroll-box");
// const output = document.querySelector("p#output");

// element.addEventListener("scroll", function(event) {
//   output.innerHTML = "Scroll event fired!";
//   setTimeout(function() {
//     output.innerHTML = "Waiting on scroll events...";
//   }, 1000);
// });



// // load events:-
// const log = document.querySelector(".event-log-contents");
// const reload = document.querySelector("#reload");

// reload.addEventListener("click", function() {
//   log.textContent = "";
//   setTimeout(function() {
//     window.location.reload(true);
//   }, 2000);
// });

// window.addEventListener('load', function(event) {
//   log.textContent += "load\n";
// });

// document.addEventListener("readystatechange", function(event) {
//   log.textContent += `readystate: ${document.readyState}\n`;
// });

// document.addEventListenerc("DOMContentLoaded", function(event) {
//   log.textContent += `DOMContentLoaded\n`;
// });


// Qu2
// let btn = document.createElement("button"); 
// btn.innerText = "Click Me!";

// document.querySelector("body").append(btn);

// btn.addEventListener("click", function(){
//   btn.classList.add("button");
// });

// Qs3.
let text = document.querySelector("#text");
let head = document.querySelector("h2");

text.addEventListener("input", function(event) {
  console.log(text.value);

  head.innerText = text.value;
});
