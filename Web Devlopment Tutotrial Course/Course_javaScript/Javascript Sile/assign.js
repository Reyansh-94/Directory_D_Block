// 1.
let btn = document.createElement('button');
let input = document.createElement('input');
console.log(btn);
console.log(input);

btn.innerText = "Click me";
input.placeholder = "Enter Your Name Here...";

document.querySelector('body').append(btn);
document.querySelector('body').append(input);

// 2.
btn.setAttribute('id', 'btn');
input.setAttribute("placeholder", "username");

// 3.
let btn1 = document.querySelector("#btn");
btn1.classList.add("button");


// 4.
let heading = document.createElement('h1');
console.log(heading);
heading.innerHTML = "<u>DOM Practice Underlined<u/>.";
document.querySelector('body').append(heading);
heading.classList.add("Design");

// 5.
let para = document.createElement('p');
console.log(para);
para.innerHTML = "Apna College <b>Delta<b/> Practice";
document.querySelector('body').append(para);

// for(let i=0; i<para.length; i++) {
//   if(para[i] == "Delta") {
//     para.classList.add("del");
//   }
//   else {
//     console.log("Sorry... Failed");
//   }
// }

